import { Router } from 'express';
import {
    newImage,
    getAllImages
} from '../controllers/Images.controllers';

const router = Router();

router.post("/api/image", newImage)
router.get("/api/images", getAllImages)


export default router