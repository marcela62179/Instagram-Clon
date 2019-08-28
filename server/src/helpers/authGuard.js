import express from 'express';
import jwt from 'jsonwebtoken';

const fs = require('fs');
const path = require('path');
const publicKey = fs.readFileSync(path.resolve(__dirname, "../publicKey.pem"));

export const authClientToken = async (req, res, next) => {

    let header = req.headers['authorization'];



    if (typeof header !== 'undefined') {

        let bearer = header.split(' ');
        let token = bearer[1];

        if (!token) {

            return res.status(401).json({ err: 'No token provided' });

        }

        jwt.verify(token, publicKey, (err, decoded) => {

            if (err) {
                return res.status(401).json({ err: 'Invalid Token' });
            }

            req.token = token;
            req.tokenId = decoded.id
            return next();

        });

    } else {
        res.status(401).json({ err: 'No token provided' });
    }

};