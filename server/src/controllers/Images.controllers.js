import Image from '../models/Image';

export const newImage = async (req, res) => {
	let { url } = req.body;

	try {
		let newImage = new Image({
			url: url,
			author: req.tokenId
		});
		await newImage.save();
		return res
			.status(200)
			.json(newImage)
			.populate('author', 'username');
	} catch (error) {
		return res.status(500).json({
			message: error
		});
	}
};

export const getAllImages = async (req, res) => {
	try {
		let images = await Image.find();
		return res.status(200).json(images);
	} catch (error) {
		return res.status(500).json({
			message: error
		});
	}
};

export const getOneImage = async (req, res) => {
	try {
		let imageId = req.params.imageId;
		let image = await Image.findOne({ _id: imageId }).populate(
			'author',
			'username avatar'
		);
		return res.status(200).json(image);
	} catch (error) {
		return res.status(500).json({
			message: 'Esta imagen no existe.'
		});
	}
};
