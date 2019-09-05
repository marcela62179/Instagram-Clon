import { Router } from 'express';

import {
    Upload
} from '../controllers/Upload.controllers'

const router = Router();

router.post("/api/upload", Upload);

export default router