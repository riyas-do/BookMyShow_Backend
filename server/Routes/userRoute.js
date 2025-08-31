import express from 'express';
const userRouter =  express.Router();
import { getUserData } from '../Controllers/userController.js';
// userRouter.route('/user')
//     .get((req, res)=>{
//         res.send('Hello world');
//     })
//     .post('/', createUser)
    
    

userRouter.route('/user/:id')
    .get(getUserData)
    // .put(updateUser)
    // .delete(deleteUser)

export default userRouter

