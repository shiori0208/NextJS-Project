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

  return (
    <div className="flex">
      <h1 className="justify-center text-amber-200 text-2xl">
        SignUp
      </h1>
    </div>
  )
}