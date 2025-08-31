import mongoose from 'mongoose';
import dotenv from 'dotenv'
dotenv.config();
const dbUrl = process.env.dbUrl;
console.log(dbUrl,'this is url');
export async function connectDb(){
    try{
    await mongoose.connect(dbUrl);
    console.log('db connection established successfully');
    }catch(err){
        console.log(err);
        throw err;
    }
};

