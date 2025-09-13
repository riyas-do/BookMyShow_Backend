import mongoose from 'mongoose';
import dotenv from 'dotenv'
dotenv.config();
const dbUrl = process.env.dbUrl;

export async function connectDb(){
    try{
    await mongoose.connect(dbUrl);
    console.info('db connection established successfully');
    }catch(err){
        console.log(err);
        throw err;
    }
};

