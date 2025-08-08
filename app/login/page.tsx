'use client';

import { useEffect, useState } from 'react';
// Use the Wallet Selector modal integration
import { useWalletSelector } from '@/lib/nearWallet'; // <-- update import as needed

export default function LoginPage() {
  const { selector, modal, accountId, signOut } = useWalletSelector();
  const [signedIn, setSignedIn] = useState(false);

  useEffect(() => {
    setSignedIn(!!accountId);
  }, [accountId]);

  const handleConnect = () => {
    if (modal) {
      modal.show();
    }
  };

  const handleSignOut = () => {
    signOut();
    setSignedIn(false);
  };

  return (
    <main className="flex justify-center items-center min-h-screen">
      <div className="card max-w-md w-full mx-auto space-y-6 text-center">
        <h1 className="text-2xl font-bold mb-4">Connect NEAR Wallet</h1>
        {signedIn ? (
          <>
            <p className="text-blue-100 mb-2">Connected as <span className="font-semibold text-white">{accountId}</span></p>
            <button
              onClick={handleSignOut}
              className="bg-[var(--blue-light)] text-[var(--blue-dark)] font-bold px-4 py-2 rounded shadow hover:bg-[var(--blue-medium)] hover:text-white transition"
            >
              Sign Out
            </button>
          </>
        ) : (
          <button
            onClick={handleConnect}
            className="bg-[var(--blue-light)] text-[var(--blue-dark)] font-bold px-4 py-2 rounded shadow hover:bg-[var(--blue-medium)] hover:text-white transition"
          >
            Connect Wallet
          </button>
        )}
      </div>
    </main>
  );
}