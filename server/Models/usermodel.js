import mongoose  from 'mongoose';

const userSchema = new mongoose.Schema(
    {
       name: { type : String,  require: true},
       email: { type : String, require: true},
       password: { type: String, required: true},
       admin: { type: Boolean, required: false}
    }
);

const userModel = mongoose.model('user', userSchema);
export default userModel;