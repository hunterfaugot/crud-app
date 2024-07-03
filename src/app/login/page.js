"use client";

import { useState } from 'react';
import { signIn } from '../../authService'; // Ensure the path is correct

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async () => {
    try {
      await signIn(email, password);
      console.log("Sign-in successful");
    } catch (error) {
      console.error("Sign-in failed:", error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">Login</h1>
      <input
        type="email"
        className="border p-2 mb-2 w-full"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        className="border p-2 mb-4 w-full"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="p-2 bg-blue-500 text-white w-full" onClick={handleSignIn}>
        Sign In
      </button>
    </div>
  );
}
