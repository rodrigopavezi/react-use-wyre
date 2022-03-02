export default function usePaymentMethod(): {
    createPaymentMethod: ({ publicToken, country, paymentMethodType }: any) => Promise<any>;
    listPaymentMethods: () => Promise<any>;
    attachBlockchain: ({ paymentMethodId, blockchains, notifyUrl, muteMessages }: any) => Promise<any>;
};
