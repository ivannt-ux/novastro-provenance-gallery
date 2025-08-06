// lib/near.ts

import { connect, WalletConnection, keyStores, ConnectConfig } from "near-api-js";

// Shared Near instance
let near: Near | null = null;
let wallet: WalletConnection | null = null;

// ConnectConfig for NEAR testnet
const config: ConnectConfig = {
  networkId: "testnet",
  keyStore: new keyStores.BrowserLocalStorageKeyStore(),
  nodeUrl: "https://rpc.testnet.near.org",
  walletUrl: "https://wallet.testnet.near.org",
  helperUrl: "https://helper.testnet.near.org",
  headers: {}
};

// ✅ Initialize and connect wallet
export const initNear = async () => {
  near = await connect(config);
  wallet = new WalletConnection(near, "novastro");
  return wallet;
};

// ✅ Get wallet instance
export const getWallet = (): WalletConnection | null => {
  return wallet;
};

// ✅ Check if signed in
export const isSignedIn = (): boolean => {
  return wallet?.isSignedIn() ?? false;
};

// ✅ Trigger NEAR wallet sign-in
export const signIn = () => {
  wallet?.requestSignIn({
    contractId: "", // Optional
    methodNames: [],
    successUrl: window.location.origin,
    failureUrl: window.location.origin
  });
};

// ✅ Sign out
export const signOut = () => {
  wallet?.signOut();
  window.location.reload();
};