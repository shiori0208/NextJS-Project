"use client"; 
import axios from "axios";
import Link from "next/link";
import toast from "react-hot-toast";
import {useRouter} from "next/navigation";
import { useState } from "react";


export default function ProfilePage() 
{
    const router = useRouter(); 
    const [data, setData] = useState("nothing!");

    const logout = async () => {
        try {
            await axios.get("/api/users/logout");;
            toast.success("Logged out successfully");
            router.push("/login");

        } catch (error: any) {
            console.log(error.message);
            toast.error(error.message);
        }
    }

    const getUserDetails = async () => {
        const res = await axios.get("/api/users/me")
        console.log(res.data);
        setData(res.data.data._id);
    }


    return(
        <div className="flex flex-col items-center justify-center min-h-screen py-2 text-2xl">
            <h1>Profile</h1>
            <hr />
            <p>Profile Page</p>
            <h3>{data === 'nothing!'? "NULL" : <Link 
            href={`/profile/${data}`}>
            </Link>}</h3>

            <hr />

            <button
            onClick={logout}
            className="bg-pink-400 text-white px-4 py-2 rounded mt-4 hover:bg-pink-500">
                Logout
            </button>
        </div>
    )
}