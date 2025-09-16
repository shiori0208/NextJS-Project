"use client" ;
import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
import { Axios } from "axios";


export default function LoginPage() {
  const [user, setUser] = React.useState({
    email: "",
    password: "",
    username: ""
  })

  const onLogin = async () => {
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-blue-200 text-2xl">
        Login </h1>
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
        className="p-2 border border-gray-400 rounded-lg mb-4 bg-blue-500 hover:bg-blue-700">
          Sign Up
        </button>
        <Link className="underline text-blue-300" href="/signup"> Don't have an account? Sign Up
        </Link>
    </div>
  )
}