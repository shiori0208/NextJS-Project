"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";

export default function SignupPage() {
  const router = useRouter();

  const [user, setUser] = useState({
    email: "",
    password: "",
    username: ""
  });

  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0 && user.username.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  const onSignup = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/signup", user);
      console.log("Signup success", response.data);
      router.push("/login");

    } catch (error: any) {
        console.log("Signup failed", error.message); 
        toast.error(error.message);
        // Display a toast notification with the error message to inform the user about the failure
 } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-900">
      <h1 className="text-amber-200 text-2xl mb-4">
        {loading ? "Processing..." : "Sign Up!"}
      </h1>
      <hr className="mb-4 w-full max-w-sm border-amber-700" />
      <label htmlFor="username" className="mb-1 text-amber-300 font-semibold">
        Username:
      </label>
      <input
        className="bg-gray-600 rounded-md p-2 mb-4 w-full max-w-sm text-white"
        type="text"
        id="username"
        value={user.username}
        onChange={(e) => setUser({ ...user, username: e.target.value })}
        placeholder="username"
        autoComplete="username"
      />

      <label htmlFor="email" className="mb-1 text-amber-300 font-semibold">
        Email:
      </label>
      <input
        className="bg-gray-600 rounded-md p-2 mb-4 w-full max-w-sm text-white"
        type="email"
        id="email"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        placeholder="email"
        autoComplete="email"
      />

      <label htmlFor="password" className="mb-1 text-amber-300 font-semibold">
        Password:
      </label>
      <input
        className="bg-gray-600 rounded-md p-2 mb-6 w-full max-w-sm text-white"
        type="password"
        id="password"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        placeholder="password"
        autoComplete="new-password"
      />

      <button
        onClick={onSignup}
        disabled={buttonDisabled || loading}
        className="p-2 border border-gray-400 rounded-lg mb-4 bg-amber-500 hover:bg-amber-700 disabled:opacity-50 disabled:cursor-not-allowed w-full max-w-sm"
        aria-disabled={buttonDisabled || loading}
        aria-busy={loading}
      >
        {loading ? "Processing..." : buttonDisabled ? "Readying..." : "Sign Up!"}
      </button>
      <Link className="underline text-amber-200" href="/login">
        Already have an account? Login
      </Link>
    </div>
  );
}
