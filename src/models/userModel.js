import mongoose from "mongoose"; 
import { unique } from "next/dist/build/utils";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please provide a username..."],
        unique: true,
        trim: true
    }
})

const User = mongoose.models.users || mongoose.model("users", userSchema); 

export default User; 

