import {connect} from "@/dbConfig/dbConfig"
import User from "@/models/userModel"
import { NextRequest, NextResponse } from "next/server"
import bcryptjs from "bcryptjs"

connect() 

export async function POST(request: NextRequest) {
    try {

        const reqBody = request.json()
        const {email, password} = reqBody

        //check if user exists 
       const user = await User.findOne({email})
        
    } catch (error: any) {
        return NextResponse
                .json({error: error.message}, 
                {status: 500})
    }
}