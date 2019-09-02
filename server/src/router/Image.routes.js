import { Router } from 'express';
import Image from '../models/Image';

let router = Router();

router.post("/api/image", async (req, res) => {

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

})

router.get("/api/images", async (req, res) => {
    try {
        let images = await Image.find()
        //.populate('author')
        return res.status(200).json(images)
    } catch (error) {
        return res.json({
            err: error
        })
    }
    
})


export default router