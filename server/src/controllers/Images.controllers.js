import Image from '../models/Image';

export const newImage = async (req, res) => {
    let { url } = req.body;

    try {
        let newImage = new Image({
            url: url,
            author: req.tokenId
        })
        await newImage.save()
        return res.status(200).json(newImage).populate('author', 'username')

    } catch (error) {
        return res.json({
            err: error
        })
    }

}

export const getAllImages = async (req, res) => {
    try {
        let images = await Image.find()
        //.populate('author')
        return res.status(200).json(images)
    } catch (error) {
        return res.json({
            err: error
        })
    }
}