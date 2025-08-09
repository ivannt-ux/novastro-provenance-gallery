"use client";

import { useState } from "react";
import { connectWallet } from "@/lib/near";

export default function LoginPage() {
  const [accountId, setAccountId] = useState<string | null>(null);

  const handleConnect = async () => {
    try {
      const account = await connectWallet();
      if (account) {
        setAccountId(account.accountId);
      }
    } catch (error) {
      console.error("Failed to connect wallet:", error);
    }
  };

  return (
    <main className="flex flex-col items-center justify-center h-screen space-y-6">
      <h1 className="text-3xl font-bold text-white">Login to Novastro</h1>

      {accountId ? (
        <p className="text-green-400">Connected as {accountId}</p>
      ) : (
        <button
          onClick={handleConnect}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
        >
          Connect NEAR Wallet
        </button>
      )}
    </main>
  );
}