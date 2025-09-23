import { getDataFromToken } from "@/helpers/getDataFromToken";
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModel";
import { connect } from "@/dbConfig/dbConfig";
import { get } from "http";

connect(); 

export async function GET(request: NextRequest) {
    
    try {

       const userID = await getDataFromToken(request);
       const user = User.findOne({_id: userID}).select("-password -isAdmin -isVerified");

       return NextResponse.json({
        message: "User exists in Database",
        data: user
       })
        
    } catch (error : any) {
        return NextResponse.json({message: error.message}, {status: 400});
        
    }
}
