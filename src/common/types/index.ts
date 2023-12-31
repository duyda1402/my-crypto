import { ConnectionInfo } from "ethers/lib/utils";

export interface NetworkIF {
  uid: string;
  icon?: string;
  networkName: string;
  rpcUrl: string;
  chainId: number | string;
  currencySymbol: string;
  blockExplorerUrl?: string;

  connectionInfo?: ConnectionInfo;
  isSystem?: boolean;
}

export interface ContractIF {
  uid: string;
  name: string;
  address: string;
  abi: string;
  isSystem?: boolean;
}
export interface AbiIF {
  uid: string;
  name: string;
  payload: string;
  isSystem?: boolean;
}

export interface DataLocal {
  networks: NetworkIF[];
  contracts: ContractIF[];
  abis: AbiIF[];
}

export interface InputAbi {
  internalType: string;
  name: string;
  type: string;
  indexed?: boolean;
}

export interface AbiDecode {
  type: "function" | "event" | "constructor";
  name?: string;
  stateMutability?: "nonpayable" | "pure" | "view";
  inputs: Array<InputAbi>;
  outputs?: Array<InputAbi>;
  anonymous?: boolean;
}
