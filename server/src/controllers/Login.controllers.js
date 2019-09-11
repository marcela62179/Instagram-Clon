import User from "../models/User";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const fs = require("fs");
const path = require("path");

const BCRYPT_SALT_ROUNDS = 10;

export const Login = async (req, res) => {
	try {
		let { username, password } = req.body;

		let userInDb = await User.findOne({
			username: username
		});

		if (!userInDb) {
			return res.status(500).json({
				sucess: false,
				message: "Username or password incorrect",
				token: null
			});
		}

		const isSamePassword = await bcrypt.compare(password, userInDb.password);

		if (isSamePassword) {
			const privateKey = fs.readFileSync(
				path.resolve(__dirname, "../keys/privateKey.pem")
			);
			// Generamos el token y lo enviamos si el usuario logeado es correcto.
			let token = jwt.sign(
				{
					id: userInDb._id,
					username: userInDb.username
				},
				privateKey,
				{ expiresIn: "3d", algorithm: "ES512" }
			);

			return res.status(200).json({
				sucess: true,
				message: null,
				token
			});
		} else {
			return res.status(500).json({
				sucess: false,
				message: "Username or password incorrect",
				token: null
			});
		}
	} catch (error) {
		return res.status(500).json({
			sucess: false,
			message: error,
			token: null
		});
	}
};

export const SignUp = async (req, res) => {
	try {
		const { username, email, password } = req.body;

		let verifyUsername = await User.findOne({
			username: username
		});

		let verifyEmail = await User.findOne({
			email: email
		});

		if (verifyUsername) {
			return res.status(500).json({
				message: "Username not available",
				field: "username"
			});
		}

		if (verifyEmail) {
			return res.status(500).json({
				message: "Email not available",
				field: "email"
			});
		}

		const hashedPassword = bcrypt.hash(password, BCRYPT_SALT_ROUNDS);

		let newUser = new User({
			username: username,
			email: email,
			password: hashedPassword
		});

		await newUser.save();
		return res.status(200).json({
			success: true,
			newUser: newUser
		});
	} catch (error) {
		return res.status(500).json({
			message: error
		});
	}
};
