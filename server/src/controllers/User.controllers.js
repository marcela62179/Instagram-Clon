import User from '../models/User';
import Image from '../models/Image';
import jwt from 'jsonwebtoken';

const fs = require('fs');
const path = require('path');

export const whoisUser = async (req, res) => {
   
    try {
        const publicKey = fs.readFileSync(path.resolve(__dirname, "../keys/publicKey.pem"));

        const token = req.token;
        const decode = jwt.decode(token);
        const { id } = decode;
        const user = await User.find({ "_id": id }, { password: false })
        
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
}
export const getUser = async (req, res) => {
    try {
        const username = req.params.username
        const user = await User.find({ "username": username }, { password: false })
        const images = await Image.find({ "author": user[0]._id }).sort({ '_id': -1 });
        return res.status(200).json({ user: user[0], images: images });
    } catch (error) {
        return res.json({ "error": error })
    }
}
export const followUser = async (req, res) => {
    try {
        const idASeguir = req.params.idfollow;
        const userId = req.tokenId
        const myUser = await User.findOne({ "_id": userId })

        for (const follow in myUser.follows) {
            if (idASeguir === myUser.follows[follow]) {
                // Si lo sigues
                return res.json({
                    success: false,
                    err: 'Ya sigues a este usuario.'
                })
            }
        }

        // No te puedes seguir a ti mismo
        if (userId === idASeguir) {
            return res.json({
                success: false,
                err: 'No te puedes seguir a ti mismo'
            })
        }

        // No lo sigues
        await User.update({ "_id": userId }, { $push: { follows: idASeguir } })
        await User.update({ "_id": idASeguir }, { $push: { followers: userId } })

        return res.json({
            "success": true,
            "err": null
        })


    } catch (error) {
        return res.json(error)
    }
}
export const unFollowUser = async (req, res) => {
    try {

        const idASeguir = req.params.idfollow;
        const userId = req.tokenId

        await User.update({ "_id": userId }, { $pull: { follows: idASeguir } })
        await User.update({ "_id": idASeguir }, { $pull: { followers: userId } })
        return res.json({
            "success": true,
            "err": null
        })

    } catch (error) {
        return res.json(error)
    }

}