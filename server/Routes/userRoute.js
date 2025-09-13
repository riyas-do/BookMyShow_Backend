import express from 'express';
const userRouter =  express.Router();
import {createUser, getallUsers, login} from '../Controllers/userController.js';


userRouter.route('/user')
    .get(getallUsers)
    .post(createUser)
    
userRouter.post('/login', login)

// userRouter.route('/user/:id')
//     .get(getUserData)
    // .put(updateUser)
    // .delete(deleteUser)

export default userRouter

