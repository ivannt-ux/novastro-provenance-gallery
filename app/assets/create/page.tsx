"use client";

import { useState, useEffect } from "react";
import { createAsset } from "@/lib/data";
import { getAccountId, connectWallet } from "@/lib/near";

export default function CreateAssetPage() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [accountId, setAccountId] = useState<string | null>(null);

  useEffect(() => {
    getAccountId().then(setAccountId);
  }, []);

  if (!accountId) {
    return (
      <main className="p-6 flex flex-col items-center">
        <p className="text-white mb-4">Please connect your wallet to create an asset.</p>
        <button
          onClick={connectWallet}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        >
          Connect Wallet
        </button>
      </main>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    createAsset({ name, description, owner: accountId });
    setName("");
    setDescription("");
    alert("Asset created successfully!");
  };

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-6 text-white">Create Asset</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Asset Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="p-2 w-full rounded"
          required
        />
        <textarea
          placeholder="Asset Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="p-2 w-full rounded"
          required
        />
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
        >
          Create
        </button>
      </form>
    </main>
  );
}