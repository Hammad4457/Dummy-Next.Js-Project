import mongoose from "mongoose";

export async function connect(){
    
    try{
        console.log("MongoDB URL:",process.env.MONGO_URL);
        
        await mongoose.connect(process.env.MONGO_URL!);
        const connection = mongoose.connection;
         connection.on('connected',()=>{
            console.log("MongoDB connected successfully");
         })
         connection.on('error',(err)=>{
            console.log(`MongoDB connection error.Make sure MongoDB is running`,+err);
         })

    }
    catch (error){
        console.log("Something went wrong");
        console.log(error);
    }
}