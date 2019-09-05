import { Router } from "express";

import jwt from 'jsonwebtoken';
import User from '../models/User';

import {
    Login,
    SignUp
} from '../controllers/Login.controllers';


const router = Router();

router.post("/api/login", Login );
router.post("/api/signup", SignUp )


export default router