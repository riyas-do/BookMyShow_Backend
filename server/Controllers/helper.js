import Joi from 'joi';

const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required().pattern(new RegExp(`^[a-zA-Z0-9]{3,10}$`)),
    name: Joi.string().min(3).max(14).required(),
    admin: Joi.boolean(),
})
export function validateUserInput(userData){
    const isValidUser = schema.validate(userData);
    if(isValidUser.error){
        return isValidUser.error;
    }
    return true;
};

export function createResponseObject(status, message,data = {}){
    return {success: status, message, data};
}