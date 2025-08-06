"use client";
import { connectWallet } from "../lib/near";

export default function LoginPage() {
  return (
    <div className="text-center mt-20">
      <h2 className="text-2xl font-bold mb-4">Login with NEAR Wallet</h2>
      <button
        onClick={connectWallet}
        className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700"
      >
        Connect NEAR Wallet
      </button>
    </div>
  );
}
