import userModel from '../Models/usermodel.js';
import { validateUserInput, createResponseObject} from './helper.js';
import * as bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export async function createUser(req, res){
 try{
   const payload = req.body;
   payload.admin = payload.admin ?? false;
   const isValidUser = validateUserInput(payload);
   if(isValidUser !== true){
     return res.status(400).send(createResponseObject(false, isValidUser.details[0].message))
   }
  const user = await userModel.findOne({
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
    console.error(err);
    res.status(500).send(createResponseObject(false, 'User creation failed'))
 }
  
}

export async function login(req, res){
  try{
   const { email, password } = req.body;
   const userData = await userModel.findOne({email});

   if(!userData){
    return res.status(404).send(createResponseObject(false, `User doesn't!. Please register before login`));
   }
   const isValidUser = await bcrypt.compare(password, userData.password);
   if(!isValidUser){
    return res.status(401).send(createResponseObject(false,'Invalid email/ password'));
   }
   const token = jwt.sign({userId: userData._id},process.env.secret,{
     expiresIn:'1d'
   });
   const response = userData.toObject();
   response.token = token;
   delete response.password;
   return res.status(200).send(createResponseObject(true, 'Login successful', response));
  }catch(err){
    console.error(err);
    return res.status(500).send(createResponseObject(false,'Unexpected error occurred'));
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