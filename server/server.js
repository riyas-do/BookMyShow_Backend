import express, { Router } from 'express';
import  userRouter from './Routes/userRoute.js';
import { connectDb } from './dbConfig.js';

const app = express();
app.use(express.json());
app.use(userRouter);


await connectDb();
app.use('/api',userRouter);
app.listen(8082,()=>{
    console.log(`Server listening at 8082`);
})