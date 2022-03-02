export default function useFetchWallet(): {
    fetchWallet: ({ walletId }: {
        readonly walletId: string;
    }, extras?: any) => Promise<any>;
};
