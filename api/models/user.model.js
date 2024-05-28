import mongoose, { Types } from 'mongoose';

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    avatar:{
        type:String,
        default:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.veryicon.com%2Ficons%2Fmiscellaneous%2Fuser-avatar%2Fuser-avatar-male-5.html&psig=AOvVaw251ShAZIwdt_b-6YggzO8B&ust=1717011304844000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCODy3NiLsYYDFQAAAAAdAAAAABAh"
    }
},{timestamps:true});

const User=mongoose.model('User',userSchema);
export default User;