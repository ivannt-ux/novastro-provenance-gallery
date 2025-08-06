// app/login/page.tsx
'use client';
import { connectWallet } from '@/lib/near';

export default function LoginPage() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold">Connect Wallet</h1>
      <p className="mb-4">Use your NEAR wallet to sign in and manage your assets on Novastro.</p>
      <button
        onClick={connectWallet}
        className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800"
      >
        Connect NEAR Wallet
      </button>
    </main>
  );
}
