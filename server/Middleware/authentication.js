import jwt from 'jsonwebtoken'; 
import { createResponseObject } from '../Controllers/helper.js';

export function authMiddleware(req, res, next){
   const token = req.headers.authorization.split(' ')[1];
   if(!token){
    return res.status(401).send(createResponseObject(false, 'Unauthorized user'));
   }
    const {userId} = jwt.verify(token, process.env.secret);
    req.userId = userId;
    next();
}

const publicRoutes = ['/Register', '/login'];

export function authHandler(req,res,next){
    if(publicRoutes.includes(req.path)){
      return next()
    }
    return authMiddleware(req,res,next);
}