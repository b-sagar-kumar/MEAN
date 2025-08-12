import { Router } from 'express';
import {userInfo} from '../application/index.js';

const router = Router();
/* GET users listing. */
router.get('/', userInfo);

export default router;
