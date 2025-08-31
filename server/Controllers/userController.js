import userModel from '../Models/usermodel';
import validateUserInput from './helper';

export async function createUser(req, res){ 
 try{
   const payload = req.body;
   const isValidUser = validateUserInput(payload);
   if(!isValidUser){
     res.status(400).send({success: false, message: 'Provide name and email'})
   }
  const userData = await userModel.create(payload);
 }catch(err){
    console.log(err);
    res.status(500).send('User not created')
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