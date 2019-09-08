import User from '../models/User';
import Image from '../models/Image';
import jwt from 'jsonwebtoken';

const fs = require('fs');
const path = require('path');

export const whoisUser = async (req, res) => {
	try {
		const publicKey = fs.readFileSync(
			path.resolve(__dirname, '../keys/publicKey.pem')
		);

		const token = req.token;
		const decode = jwt.decode(token);

		let isExpired;
		const isValid = await jwt.verify(token, publicKey);

		if (Date.now() >= decode.expiresIn * 1000) {
			isExpired = false;
		}

		if (!isValid && isExpired) {
			return res.status(200).json({
				tokenIsValid: false
			});
		}

		return res.status(200).json({
			tokenIsValid: true
		});
	} catch (error) {
		res.status(200).json({ tokenIsValid: false });
	}
};
export const getUser = async (req, res) => {
	try {
		const username = req.params.username;
		const user = await User.findOne(
			{ username: username },
			{ password: false }
		);
		const images = await Image.find({ author: user._id }).sort({
			_id: -1
		});

		if (!user) {
			return res.status(500).json({ message1: 'Este usuario no existe' });
		}

		return res.status(200).json({ user: user, images: images });
	} catch (error) {
		return res
			.status(500)
			.json({ message: 'Al parecer este usuario no existe' });
	}
};
export const followUser = async (req, res) => {
	try {
		const idASeguir = req.params.idfollow;
		const userId = req.tokenId;
		const myUser = await User.findOne({ _id: userId });

		for (const follow in myUser.follows) {
			if (idASeguir === myUser.follows[follow]) {
				// Si lo sigues
				return res.status(500).json({
					success: false,
					message: 'Ya sigues a este usuario.'
				});
			}
		}

		// No te puedes seguir a ti mismo
		if (userId === idASeguir) {
			return res.status(500).json({
				success: false,
				message: 'No te puedes seguir a ti mismo'
			});
		}

		// No lo sigues
		await User.update({ _id: userId }, { $push: { follows: idASeguir } });
		await User.update({ _id: idASeguir }, { $push: { followers: userId } });

		return res.status(200).json({
			success: true
		});
	} catch (error) {
		return res.status(500).json({
			message: error
		});
	}
};
export const unFollowUser = async (req, res) => {
	try {
		const idASeguir = req.params.idfollow;
		const userId = req.tokenId;

		await User.update({ _id: userId }, { $pull: { follows: idASeguir } });
		await User.update({ _id: idASeguir }, { $pull: { followers: userId } });

		return res.status(200).json({
			success: true
		});
	} catch (error) {
		return res.status(500).json({
			message: error
		});
	}
};
