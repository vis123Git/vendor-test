const mongoose = require("mongoose");


exports.dbConnect = async()=>{
        try {
                const db = await mongoose.connect("mongodb://localhost:27017/Vendor-app")
                if(db){
                        console.log("Database connected successfully");
                }else{
                        console.log("Database connection failed");
                }
        } catch (error) {
              throw error  
        }
}
