// lib/near.ts

import { Near, WalletConnection, keyStores, ConnectConfig } from 'near-api-js';

let near: Near | null = null;
let wallet: WalletConnection | null = null;

// NEAR configuration for testnet; customize as needed for mainnet
const config: ConnectConfig = {
  networkId: 'testnet',
  nodeUrl: 'https://rpc.testnet.near.org',
  walletUrl: 'https://wallet.testnet.near.org',
  helperUrl: 'https://helper.testnet.near.org',
  keyStore: new keyStores.BrowserLocalStorageKeyStore(),
  headers: {},
};

export async function initNear(): Promise<WalletConnection> {
  if (!near) {
    near = new Near(config);
  }
  if (!wallet) {
    wallet = new WalletConnection(near, null);
  }
  return wallet;
}

export function isSignedIn(): boolean {
  return wallet?.isSignedIn() ?? false;
}

export function signOut(): void {
  wallet?.signOut();
}