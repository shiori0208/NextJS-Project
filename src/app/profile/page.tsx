"use client"; 
import axios from "axios";
import Link from "next/link";
import toast from "react-hot-toast";


export default function ProfilePage() 
{
    const logout = () => {
        try {
            
        } catch (error: any) {
            console.log(error.message);

            toast.error(error.message);
        }
    }

    return(
        <div className="flex flex-col items-center justify-center min-h-screen py-2 text-2xl">
            <h1>Profile</h1>
            <hr />
            <p>Profile Pic</p>

            <hr />

            <button
            onClick={logout}
            className="bg-pink-400 text-white px-4 py-2 rounded mt-4">
                Logout
            </button>
        </div>
    )
}