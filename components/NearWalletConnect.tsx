"use client";
import { useEffect, useState } from "react";
import { initWalletSelector } from "@/lib/nearWallet";

export default function NearWalletConnect() {
  const [signedIn, setSignedIn] = useState(false);
  const [accountId, setAccountId] = useState<string>("");

  useEffect(() => {
    let selector: any;
    const init = async () => {
      selector = await initWalletSelector();
      setSignedIn(selector.isSignedIn());
      if (selector.isSignedIn()) {
        setAccountId(selector.store.getState().accounts[0].accountId);
      }
      selector.store.observable.subscribe((state: any) => {
        setSignedIn(state.accounts.length > 0);
        setAccountId(state.accounts[0]?.accountId || "");
      });
    };
    init();
  }, []);

  const openModal = () => {
    window.walletSelector.show();
  };

  return (
    <div>
      {!signedIn ? (
        <button onClick={openModal} className="px-4 py-2 bg-black text-white rounded">
          Connect NEAR Wallet
        </button>
      ) : (
        <div>
          <p>Signed in as: {accountId}</p>
          <button onClick={openModal} className="px-4 py-2 bg-gray-700 text-white rounded">
            Manage Wallet
          </button>
        </div>
      )}
    </div>
  );
}