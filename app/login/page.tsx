'use client';

import { useEffect, useState } from 'react';
import { initNear } from '@/lib/near';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [walletAvailable, setWalletAvailable] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const checkWallet = async () => {
      const wallet = await initNear();
      if (wallet?.isSignedIn()) {
        router.push('/gallery');
      } else {
        setWalletAvailable(true);
      }
    };

    checkWallet();
  }, [router]);

  const handleConnect = async () => {
    const wallet = await initNear();
    wallet?.requestSignIn();
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">Welcome to Novastro Provenance Gallery</h1>
        {walletAvailable && (
          <button
            onClick={handleConnect}
            className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800"
          >
            Connect NEAR Wallet
          </button>
        )}
      </div>
    </div>
  );
}