export default function useSecretKey(): {
    createSecretKey: ({ secretKey, }: {
        readonly secretKey: string;
    }) => Promise<{
        secretKey: string;
        apiKey: any;
        bearerToken: string;
    }>;
};
