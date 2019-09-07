import User from '../models/User'
import jwt from 'jsonwebtoken';

const fs = require('fs');
const path = require('path');


export const Login = async (req, res) => {
    try {
        let { username, password } = req.body;

        let user = await User.findOne({
            username: username,
            password: password
        });

        if (user) {
            const privateKey = fs.readFileSync(path.resolve(__dirname, "../keys/privateKey.pem"));
            // Generamos el token y lo enviamos si el usuario logeado es correcto.
            let token = jwt.sign({
                id: user._id,
                username: user.username
            }, privateKey, { expiresIn: '7d', algorithm: 'ES512' });

            return res.status(200).json({
                sucess: true,
                message: null,
                token
            });
        } else {
            return res.status(500).json({
                sucess: true,
                message: 'Username or password incorrect',
                token: null
            });
        }
    } catch (error) {
        return res.status(500).json({
            sucess: true,
            message: error,
            token: null
        });
    }
}

export const SignUp = async (req, res) => {
    try {

        const { username, email, password } = req.body

        let verifyUsername = await User.findOne({
            username: username
        })

        let verifyEmail = await User.findOne({
            email: email
        })

        if (verifyUsername) {
            return res.status(500).json({
                message: 'Username not available',
                field: 'username'
            })
        }

        if (verifyEmail) {
            return res.status(500).json({
                message: 'Email not available',
                field: 'email'
            })
        }

        let newUser = new User({
            username: username,
            email: email,
            password: password
        })

        await newUser.save()
        return res.status(200).json({
            success: true,
            newUser: newUser
        });

    } catch (error) {
        return res.status(500).json({
            message: error
        });
    }
}

