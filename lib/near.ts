import { setupWalletSelector, WalletSelector } from "@near-wallet-selector/core";
import { setupModal, WalletSelectorModal } from "@near-wallet-selector/modal-ui";
import { setupNearWallet } from "@near-wallet-selector/near-wallet";
import { setupMyNearWallet } from "@near-wallet-selector/my-near-wallet";

import "@near-wallet-selector/modal-ui/styles.css";

let selector: WalletSelector | null = null;
let modal: WalletSelectorModal | null = null;

export async function initNear() {
  if (!selector) {
    selector = await setupWalletSelector({
      network: "testnet",
      modules: [
        setupNearWallet(),
        setupMyNearWallet()
      ]
    });

    modal = setupModal(selector, { contractId: "your-contract.testnet" });
  }
}

export async function connectWallet() {
  await initNear();
  if (modal) modal.show();
}

export async function disconnectWallet() {
  if (!selector) return;
  const wallet = await selector.wallet();
  await wallet.signOut();
}

export async function getAccountId(): Promise<string | null> {
  if (!selector) return null;
  const accounts = await selector.store.getState().accounts;
  return accounts.length > 0 ? accounts[0].accountId : null;
}

export function isWalletConnected(): boolean {
  if (!selector) return false;
  const accounts = selector.store.getState().accounts;
  return accounts.length > 0;
}