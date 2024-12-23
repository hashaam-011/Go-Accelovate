'use client';

import { signIn } from "next-auth/react";

export default function SignIn() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-6">Sign In</h1>
      <button
        onClick={() => signIn("google")}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
      >
        Sign in with Google
      </button>
    </div>
  );
}
