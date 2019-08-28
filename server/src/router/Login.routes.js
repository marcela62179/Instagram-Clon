import { Router } from "express";
import jwt from 'jsonwebtoken';
import User from '../models/User';


require('dotenv').config()
var aws = require('aws-sdk');

const fs = require('fs');
const path = require('path');
const privateKey = fs.readFileSync(path.resolve(__dirname, "../privateKey.pem"));

aws.config.update({
    region: 'us-east-1',
    accessKeyId: process.env.AWSAccessKeyId,
    secretAccessKey: process.env.AWSSecretKey
})

var router = Router();

const S3_BUCKET = process.env.bucket

router.post("/api/login", async (req, res) => {

    let { username, password } = req.body;

    let user = await User.findOne({
        username: username,
        password: password
    });

    if (user) {
        // Generamos el token y lo enviamos si el usuario logeado es correcto.
        let token = jwt.sign({
            id: user._id,
            username: user.username
        }, privateKey , { expiresIn: '7d', algorithm: 'ES512' });

        res.status(200).json({
            sucess: true,
            err: null,
            token
        });
        return;
    } else {
        res.json({
            sucess: true,
            err: 'Username or password incorrect',
            token: null
        });
        return;
    }
});


router.post("/api/uploadavatar", async (req, res) => {

    const s3 = new aws.S3();
    const fileName = req.body.fileName;
    const fileType = req.body.fileType;
    const folder = req.body.folder;

    const s3Params = {
        Bucket: S3_BUCKET + '/' + folder,
        Key: fileName,
        Expires: 500,
        ContentType: fileType,
        ACL: 'public-read'
    };

    s3.getSignedUrl('putObject', s3Params, (err, data) => {
        
        if (err) {
            console.log(err);
            res.json({ success: false, error: err })
        }

        const returnData = {
            signedRequest: data,
            url: `https://${S3_BUCKET}.s3.amazonaws.com/${folder}/${fileName}`
        };

        res.json({ success: true, data: { returnData } });

    });

});

export default router