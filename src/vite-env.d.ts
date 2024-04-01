/// <reference types="vite/client" />

interface Window {
  ethereum?: import("ethers").providers.ExternalProvider;
  myProvider: any;
}

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string;
  readonly VITE_PRO_ID_WALLET_CONNECT: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
