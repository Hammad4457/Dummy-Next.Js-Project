import {connect} from "../../../../dbConfig/dbConfig"
import User from "../../../../models/userModel"
import {NextRequest , NextResponse} from "next/server"
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken"

connect();

export async function POST(req:NextRequest){
    
    try{
        const reqBody=await req.json();
        const {username , email , password} = reqBody;

        const user=await User.findOne({email})
        if(user){
            return NextResponse.json({error:"User already exists"},{status:400});
        }
        //hash password
        const salt = await bcryptjs.genSalt(10);
        const hashPassword=await bcryptjs.hash(password,salt);

        const newUser= new User({
            username,
            email,
            password:hashPassword
        }) 

        const saved = await newUser.save();
        console.log(saved);

        return NextResponse.json({message:"User created successfully"},{status:201});
    }
    catch(err:any){
         return NextResponse.json({error:err.message},
            {status:500}
         )
    }
     
    

}

  

