import exp from "constants";
import mongoose from "mongoose";
import { type } from "os";

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required: [true,"Plz provide a email"],
        unique:true
    },
    password :{
        type:String,
        required: [true,"Plz provide a email"]
        
    },
    isVerified: {
        type:Boolean,
        default: false,
    },
    isAdmin: {
        type:Boolean,
        default: false
    },
    forgotPasswordToken:String,
    forgotPasswordTokenExpiry:Date,
    verifyToken:String,
    verifyTokenExpiry:Date,
})

const User = mongoose.models.User || mongoose.model("User", userSchema);
("users",userSchema)

export default User;