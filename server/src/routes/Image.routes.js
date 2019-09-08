import { Router } from 'express';
import {
	newImage,
	getAllImages,
	getOneImage
} from '../controllers/Images.controllers';

const router = Router();

router.post('/api/image', newImage);
router.get('/api/images', getAllImages);
router.get('/api/image/:imageId', getOneImage);

export default router;
