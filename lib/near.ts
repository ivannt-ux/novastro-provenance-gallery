// lib/near.ts

import { Near, WalletConnection, keyStores, ConnectConfig } from 'near-api-js';

// These variables must only be initialized on the client.
// Never access window or localStorage on the server!
let near: Near | null = null;
let wallet: WalletConnection | null = null;

// NEAR configuration for testnet; change as needed for mainnet.
const config: Omit<ConnectConfig, 'keyStore'> = {
  networkId: 'testnet',
  nodeUrl: 'https://rpc.testnet.near.org',
  walletUrl: 'https://wallet.testnet.near.org',
  helperUrl: 'https://helper.testnet.near.org',
  headers: {},
};

/**
 * Initializes NEAR and WalletConnection.
 * Only runs on the client; returns null on server.
 */
export async function initNear(): Promise<WalletConnection | null> {
  if (typeof window === 'undefined') return null;
  if (!near) {
    near = new Near({
      ...config,
      keyStore: new keyStores.BrowserLocalStorageKeyStore(),
    });
  }
  if (!wallet) {
    wallet = new WalletConnection(near, null);
  }
  return wallet;
}

/**
 * Checks if the wallet is signed in.
 * Always returns false on server.
 */
export function isSignedIn(): boolean {
  if (typeof window === 'undefined' || !wallet) return false;
  return wallet.isSignedIn();
}

/**
 * Signs out of the wallet (client-only).
 */
export function signOut(): void {
  if (typeof window !== 'undefined' && wallet) {
    wallet.signOut();
  }
}