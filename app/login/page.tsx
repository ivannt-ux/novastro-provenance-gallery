// app/login/page.tsx
'use client';

import { useEffect, useState } from 'react';
import { initNear, isSignedIn, signOut } from '@/lib/near';

export default function LoginPage() {
  const [signedIn, setSignedIn] = useState(false);

  useEffect(() => {
    setSignedIn(isSignedIn());
  }, []);

  const handleConnect = async () => {
    const wallet = await initNear();
    wallet?.requestSignIn(""); // Pass empty string as contractId
  };

  const handleSignOut = () => {
    signOut();
    setSignedIn(false);
  };

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Connect NEAR Wallet</h1>
      {signedIn ? (
        <button
          onClick={handleSignOut}
          className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800"
        >
          Sign Out
        </button>
      ) : (
        <button
          onClick={handleConnect}
          className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800"
        >
          Connect Wallet
        </button>
      )}
    </main>
  );
}