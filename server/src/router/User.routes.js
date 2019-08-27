import { Router } from "express";
import jwt from 'jsonwebtoken';
import User from '../models/User';

require('dotenv').config()

let router = Router();

router.get('/api/user/whois', async (req, res) => {
    try {
        const token = req.token;
        const decode = jwt.decode(token);
        const { id } = decode;
        const user = await User.find({ "_id": id })

        res.status(200).json(
            {
                user: user,
                tokenIsValid: true
            }
        );

        
    } catch (error) {
        res.json({ "error": error })
    }
})


export default router