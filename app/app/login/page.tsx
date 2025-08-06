"use client";
import { useEffect } from "react";
import { addMilestone } from "../../../../lib/data";

export default function LoginPage() {
  useEffect(() => {
    connectWallet();
  }, []);

  return (
    <div className="text-center mt-20">
      <h2 className="text-xl font-semibold mb-4">Connecting to NEAR Wallet...</h2>
      <p>Please authorize the app to continue using Novastro.</p>
    </div>
  );
}
