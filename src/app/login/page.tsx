"use client" ;
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";
import { set } from "mongoose";


export default function LoginPage() {
  
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: "",
    password: "",
    username: ""
  })

  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [loading, setLoading] = useState(false);

 
  const onLogin = async () => {
    try {
      setLoading(true);
      const response = await axios.post('/api/users/login', user);
      console.log("Login success", response.data);
      toast.success("Login successful");
      router.push('/profile');


    } catch (error: any) {
        console.log("Login failed", error.message);
        toast.error(error.message);
    }

    finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user])


  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-blue-200 text-2xl">
        {loading ? "Processing..." : "Login"} </h1>
        <hr />

        <label htmlFor="email">Email:</label>
        <input className="bg-gray-500 rounded-md p-2"
        type="text" 
        id="email"
        value={user.email}
        onChange={(e) => setUser({...user, email: e.target.value})}
        placeholder="email" />

        <label htmlFor="password">Password:</label>
        <input className="bg-gray-500 rounded-md p-2"
        type="text" 
        id="password"
        value={user.password}
        onChange={(e) => setUser({...user, password: e.target.value})}
        placeholder="password" />
        <br />
        <button 
        onClick={onLogin}
        disabled={buttonDisabled || loading}
        className="p-2 border border-gray-400 rounded-lg mb-4 bg-blue-500 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed max-w-sm" aria-disabled={buttonDisabled || loading}
        aria-busy={loading}>
          {buttonDisabled? "Loading..." : "Login"}
        </button>
        <Link className="underline text-blue-300" href="/signup"> Don't have an account? Sign Up
        </Link>
    </div>
  )
}