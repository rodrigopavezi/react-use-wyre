import { useCallback } from "react";
import { useWyre } from ".";

export default function useApplePay() {
  const { wyre } = useWyre();
  const prepareApplePay = useCallback(
    async ({
      amount,
      sourceCurrency,
      destCurrency,
      dest,
      partnerId,
      countryCode,
      referenceId,
      user: {
        firstName,
        lastName,
        email,
        street1,
        city,
        state,
        country,
        postalCode,
        phone,
      },
    }) => {
      const {data: {sourceAmount}} = await wyre( // amountUserHasToPay
        {
          url: "v3/orders/quote/partner",
          method: "post",
          data: {
            amount,
            sourceCurrency,
            destCurrency,
            dest,
            accountId: partnerId,
            country,
          },
        },
      );
      const {data: {reservation}} = await wyre(
        {
          url: "v3/orders/reserve",
          method: "post",
          data: {
            amount,
            sourceCurrency,
            destCurrency,
            dest,
            referrerAccountId: partnerId,
            email,
            firstName,
            city,
            phone,
            street1,
            country,
            // TODO: fix this
            "redirectUrl": "https://google.com",
            "failureRedirectUrl": "https://google.com",
            paymentMethod: "apple-pay",
            state,
            postalCode,
            lastName,
            lockFields: ["amount", "sourceCurrency"],
          },
        },
      );
      return [
        sourceAmount,
        async (applePayToken) => {
          const addressLines = [street1, city, state];
          const {data} = await wyre(
            {
              url: "v3/apple-pay/process/partner",
              method: "post",
              data: {
                partnerId,
                payload: {
                  paymentObject: {
                    billingContact: {
                      addressLines,
                      postalCode,
                      country,
                      countryCode,
                      familyName: lastName,
                      givenName: firstName,
                      locality: city,
                      administrativeArea: state,
                      subAdministrativeArea: "",
                      subLocality: "",
                    },
                    shippingContact: {
                      addressLines,
                      postalCode,
                      country,
                      countryCode,
                      emailAddress: email,
                      familyName: lastName,
                      givenName: firstName,
                      locality: city,
                      phoneNumber: phone,
                      administrativeArea: state,
                      subAdministrativeArea: "",
                      subLocality: "",
                    },
                    token: applePayToken,
                  },
                  orderRequest: {
                    amount,
                    sourceCurrency,
                    destCurrency,
                    dest,
                    reservationId: reservation,
                    referrerAccountId: partnerId,
                    referenceId,
                  }
                }
              },
            },
          );
          return data;
        }
      ];
    },
    [],
  );
  return [prepareApplePay];
}
