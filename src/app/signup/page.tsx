"use client" ;
import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
import { Axios } from "axios";


export default function SignupPage() {
  const [user, setUser] = React.useState({
    email: "",
    password: "",
    username: ""
  })

  const onSignup = async () => {
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-amber-200 text-2xl">
        SignUp </h1>
        <hr />
        <label htmlFor="username">Username:</label>
        <input className="bg-gray-600 rounded-md p-2"
        type="text" 
        id="username"
        value={user.username}
        onChange={(e) => setUser({...user, username: e.target.value})}
        placeholder="username" />
        <label htmlFor="email">email:</label>
        <input className="bg-gray-600 rounded-md p-2"
        type="text" 
        id="email"
        value={user.email}
        onChange={(e) => setUser({...user, email: e.target.value})}
        placeholder="email" />
        <label htmlFor="password">password:</label>
        <input className="bg-gray-600 rounded-md p-2"
        type="text" 
        id="password"
        value={user.password}
        onChange={(e) => setUser({...user, password: e.target.value})}
        placeholder="password" />
        <button className="p-2 border border-gray-400 rounded-lg mb-4 bg-amber-300">
          Sign Up
        </button>
    </div>
  )
}