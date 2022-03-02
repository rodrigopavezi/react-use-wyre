export default async function processApplePay({ wyre, partnerId, ref, applePayToken, }) {
    const { sourceCurrency, destCurrency, dest, countryCode, referenceId, user: { firstName, lastName, email, street1, city, state, country, postalCode, phone, }, quote: { sourceAmount }, reserve: { reservation }, } = ref;
    const addressLines = [street1, city, state];
    const { data } = await wyre({
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
                    amount: sourceAmount,
                    sourceCurrency,
                    destCurrency,
                    dest,
                    reservationId: reservation,
                    referrerAccountId: partnerId,
                    referenceId,
                }
            }
        },
    });
    return data;
}
