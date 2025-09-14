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
        SignUp
      </h1>
    </div>
  )
}