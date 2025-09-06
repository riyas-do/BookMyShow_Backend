import userModel from '../Models/usermodel.js';
import { validateUserInput, createResponseObject} from './helper.js';
import * as bcrypt from 'bcrypt'

export async function createUser(req, res){ 
 try{
   const payload = req.body;
   const isValidUser = validateUserInput(payload);
   if(isValidUser !== true){
     return res.status(400).send(createResponseObject(false, isValidUser.error))
   }
  const user = await userModel.find({
      email: payload.email
  });
  if(user){
    return res.status(400).send(createResponseObject(false, 'User exists please login'));
  }
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(payload.password, salt);
  payload.password = hashedPassword;
  await userModel.create(payload);
  res.status(201).send(createResponseObject(true, 'User created successfully'));
 }catch(err){
    console.log(err);
    res.status(500).send(createResponseObject(false, 'User creation failed'))
 }
  
}

export async function getallUsers(req, res){
    const users = await userModel.find();
    res.status(200).send({
        users
    });
}

export async function getUserData(req, res){
    const userId = req.params;
    res.status(200).send('user found');
}