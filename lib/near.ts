// lib/near.ts
import { setupWalletSelector, WalletSelector } from "@near-wallet-selector/core";
import { setupModal, WalletSelectorModal } from "@near-wallet-selector/modal-ui";
import { setupNearWallet } from "@near-wallet-selector/near-wallet";
import { setupMyNearWallet } from "@near-wallet-selector/my-near-wallet";
import "@near-wallet-selector/modal-ui/styles.css";

let selector: WalletSelector | null = null;
let modal: WalletSelectorModal | null = null;

const CONTRACT_ID = ""; // optional: put your contract id here if you have one
const NETWORK = "testnet"; // change to "mainnet" when ready

export async function initNearSelector() {
  if (selector) return selector;

  selector = await setupWalletSelector({
    network: NETWORK,
    modules: [
      setupNearWallet(),
      setupMyNearWallet()
      // add other wallets here if desired
    ],
  });

  modal = setupModal(selector, { contractId: CONTRACT_ID });

  return selector;
}

/**
 * Opens the in-app modal for wallet selection.
 * Returns nothing; the modal manages the flow and stores accounts in selector.store.
 */
export async function connectWallet(): Promise<void> {
  await initNearSelector();
  if (modal) {
    modal.show();
  } else {
    throw new Error("Wallet modal not initialized");
  }
}

/** Get current accountId if any (returns null if none) */
export async function getAccountId(): Promise<string | null> {
  await initNearSelector();
  const state = selector!.store.getState();
  const accounts = state.accounts;
  return accounts?.length ? accounts[0].accountId : null;
}

/** Disconnect / sign out */
export async function disconnectWallet(): Promise<void> {
  if (!selector) return;
  const wallet = await selector.wallet();
  try {
    await wallet.signOut();
  } catch (e) {
    console.warn("Error signing out", e);
  }
}

/** quick boolean helper */
export function isWalletConnected(): boolean {
  if (!selector) return false;
  const state = selector.store.getState();
  return (state.accounts && state.accounts.length > 0) || false;
}