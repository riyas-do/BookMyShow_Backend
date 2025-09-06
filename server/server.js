
import express, { Router } from 'express';
import  userRouter from './Routes/userRoute.js';
import { connectDb } from './dbConfig.js';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(userRouter);
app.use(cors());


await connectDb();
app.use('/api',userRouter);
app.listen(8082,()=>{
    console.log(`Server listening at 8082`);
})