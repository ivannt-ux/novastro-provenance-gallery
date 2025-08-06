// @/lib/near.ts

import { connect, WalletConnection, keyStores, Near, ConnectConfig } from 'near-api-js';

const config: ConnectConfig = {
  networkId: 'testnet',
  keyStore: new keyStores.BrowserLocalStorageKeyStore(),
  nodeUrl: 'https://rpc.testnet.near.org',
  walletUrl: 'https://wallet.testnet.near.org',
  helperUrl: 'https://helper.testnet.near.org',
  headers: {}
};

let near: Near | null = null;
let wallet: WalletConnection | null = null;

export const initNear = async () => {
  near = await connect(config);
  wallet = new WalletConnection(near, 'novastro');
};

export const login = () => {
  if (!wallet) throw new Error('Wallet not initialized');
  wallet.requestSignIn();
};

export const logout = () => {
  if (!wallet) throw new Error('Wallet not initialized');
  wallet.signOut();
};

export const getWallet = (): WalletConnection | null => {
  return wallet;
};
