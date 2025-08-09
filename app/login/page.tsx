"use client";

import { useEffect, useState } from "react";
import { connectWallet, getAccountId } from "@/lib/near";

export default function LoginPage() {
  const [accountId, setAccountId] = useState<string | null>(null);

  useEffect(() => {
    // on load, try to read account (if user already connected previously)
    getAccountId().then(setAccountId).catch(console.error);
  }, []);

  const handleConnect = async () => {
    await connectWallet();
    const id = await getAccountId();
    setAccountId(id);
  };

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Connect Wallet</h1>
      {!accountId ? (
        <button onClick={handleConnect} className="px-4 py-2 bg-blue-600 text-white rounded">Connect NEAR Wallet</button>
      ) : (
        <p>Connected as {accountId}</p>
      )}
    </main>
  );
}