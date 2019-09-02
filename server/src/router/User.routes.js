import { Router } from "express";
import jwt from 'jsonwebtoken';
import User from '../models/User';
import Image from '../models/Image';
require('dotenv').config()

const fs = require('fs');
const path = require('path');
const publicKey = fs.readFileSync(path.resolve(__dirname, "../publicKey.pem"));

let router = Router();

router.get('/api/user/whois', async (req, res) => {
    try {
        const token = req.token;
        const decode = jwt.decode(token);
        const { id } = decode;
        const user = await User.find({ "_id": id } , {password: false})
        const isValid = await jwt.verify(token, publicKey)
        if (user && isValid) {
            res.status(200).json(
                {
                    user: user[0],
                    tokenIsValid: true
                }
            );
        } else {
            res.status(200).json(
                {
                    user: null,
                    tokenIsValid: false
                }
            );
        }
    } catch (error) {
        res.json({ "error": error })
    }
})

router.get('/api/user/:username', async (req, res) => {
    try {
        const username = req.params.username
        const user = await User.find({ "username": username }, { password: false })
        const images = await Image.find({ "author": user[0]._id}).sort({'_id': -1});
        return res.status(200).json({user: user[0], images: images});
    } catch (error) {
        return res.json({ "error": error })
    }
})

export default router