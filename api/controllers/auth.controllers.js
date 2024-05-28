import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import jwt from 'jsonwebtoken';
import { errorHandler } from "../utils/error.js";

export const signupController = async (req, res,next) => {
  const { username, email, password } = req.body;
  if (
    !username ||
    !email ||
    !password ||
    username === "" ||
    email === "" ||
    password === ""
  ) {
    next(errorHandler(400,'all fields are required'))
  }else{
    const hashedPassword =  bcryptjs.hashSync(password, 10);
  const newUser = new User({
    username,
    email,
    password: hashedPassword,
  });
  try {
    await newUser.save();
    res.json("signup succesfull");
  } catch (error) {
    next(error);
  }
  }
};

export const signinController=async(req,res,next)=>{
  const {email,password}=req.body;
  try {
    const validUser=await User.findOne({email});
  if(!validUser) return next(errorHandler(404,'user not found'));
  const validPassword= bcryptjs.compareSync(password,validUser.password);
  if(!validPassword) return next(errorHandler(401,'wrong credentials'));
  const token=jwt.sign({id:validUser._id},process.env.JWT_SECRET);
  const {password:pass,...rest}=validUser._doc;
  res.cookie('access_token',token,{httpOnly:true}).status(200).json(rest);
  } catch (error) {
    next(error)
  }
};

export const google = async (req, res, next) => {
  try {
    const userExist = await User.findOne({ email:req.body.email });
    if (userExist) {
      const token = jwt.sign({ id: userExist._id }, process.env.JWT_SECRET);
      const { password: pass, ...rest } = userExist._doc;
      
      res.cookie("access_token", token, { httpOnly: true })
        .status(200)
        .json(rest);
    } else {
      const generatedPassword = Math.random().toString(36).slice(-8) + Math.random().toString(36).slice(-8);
      const hashedPassword=bcryptjs.hashSync(generatedPassword,10)
      const newUser=new User({
        username:req.body.name.split(" ").join("").toLowerCase() + Math.random().toString(36).slice(-8),
        email:req.body.email,
        password:hashedPassword,
        avatar:req.body.photo
      });

     const result= await newUser.save();
     const token = jwt.sign({ id: result._id }, process.env.JWT_SECRET);
     const { password: pass, ...rest } = result._doc;
     res
       .cookie("access_token", token, { httpOnly: true })
       .status(200)
       .json(rest);

    }
  } catch (error) {
    next(error);
  }
};
