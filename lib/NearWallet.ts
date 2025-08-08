import { setupWalletSelector } from "@near-wallet-selector/core";
import { setupModal } from "@near-wallet-selector/modal-ui";
import { setupNearWallet } from "@near-wallet-selector/near-wallet";
import { setupMyNearWallet } from "@near-wallet-selector/my-near-wallet";
import "@near-wallet-selector/modal-ui/styles.css";

let selector: any = null;

export async function initWalletSelector() {
  if (selector) return selector;
  selector = await setupWalletSelector({
    network: "testnet",
    modules: [setupNearWallet(), setupMyNearWallet()],
  });
  setupModal(selector, { theme: "dark" });
  return selector;
}