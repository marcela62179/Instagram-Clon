import { Router } from 'express';
import {
	getUser,
	followUser,
	unFollowUser,
	whoisUser
} from '../controllers/User.controllers';

require('dotenv').config();

const router = Router();

router.get('/api/user/whois', whoisUser);
router.get('/api/user/:username', getUser);
router.put('/api/user/follow/:idfollow', followUser);
router.put('/api/user/unfollow/:idfollow', unFollowUser);

export default router;
