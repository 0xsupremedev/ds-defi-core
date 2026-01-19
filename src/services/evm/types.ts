export type Chain = 'ethereum' | 'base' | 'polygon' | 'arbitrum';

export interface GasEstimation {
    gasLimit: string;
    gasPrice?: string;
    maxFeePerGas?: string;
    maxPriorityFeePerGas?: string;
    totalCostEstimate: string;
}

export interface EVMWallet {
    address: string;
    privateKey: string;
    mnemonic?: string;
}

export interface TransactionRequest {
    to: string;
    from?: string;
    value?: string;
    data?: string;
}
