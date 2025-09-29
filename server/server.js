
import express, { Router } from 'express';
import cors from 'cors';
import  userRouter from './Routes/userRoute.js';
import { connectDb } from './dbConfig.js';
import { authHandler } from './Middleware/authentication.js';

const app = express();

app.use(express.json());

app.use(cors());
app.use('/api', authHandler)

await connectDb();
app.use('/api',userRouter);
app.listen(8082,()=>{
    console.info(`Server listening at 8082`);
})