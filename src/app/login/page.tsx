"use client"
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios  from "axios";


export default function loginPage(){
    let [user,setUser] = useState({
        email: "",
        password:"",
        
    })

    const onlogin=async()=>{
        console.log("Hello");
    }
 
    
    return (
        <div className="flex flex-col">
            <h1 className="text-cetner text-white text-2xl">Login</h1>
           
            <label htmlFor="email:" className="mt-20 ml-4">Email:</label>
            <input
            className=" w-60 text-blue-500 p-2 mt-4 ml-40 border rounded-lg "
                id="email"
                type="email"
                value={user.email}
                onChange={(e)=>
                    setUser({...user,email:e.target.value})}
            />
            <label htmlFor="password" className="mt-20 ml-4">Password:</label>
            <input
            className="w-60 text-blue-500 p-2 mt-4 ml-40 border rounded-lg "
                id="password"
                type="password"
                value={user.password}
                onChange={(e)=>
                    setUser({...user,password:e.target.value})}
            />

            <div onClick={onlogin} className="flex justify-center ml-48 w-40 rounded-lg mt-4 bg-blue-500">
                <button className="text-center text-white">Sign Up</button>
                
            </div> 
            <Link href="/signup">Visit SignUp Page</Link>
        </div>
        
    )  
} 