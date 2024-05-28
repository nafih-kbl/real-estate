import express from 'express';
import {  signinController, signupController,google } from '../controllers/auth.controllers.js';
const router=express.Router();


router.post('/signup',signupController);
router.post('/signin',signinController);
router.post('/google',google)

export default router;
