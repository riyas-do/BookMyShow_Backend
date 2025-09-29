import express from 'express';
const userRouter =  express.Router();
import {createUser, getallUsers,getUserData, login} from '../Controllers/userController.js';


userRouter.route('/user')
    .get(getUserData)
    
userRouter.route('/register').post(createUser)
userRouter.post('/login', login)

// userRouter.route('/user/:id')
//     .get(getUserData)
    // .put(updateUser)
    // .delete(deleteUser)

export default userRouter

