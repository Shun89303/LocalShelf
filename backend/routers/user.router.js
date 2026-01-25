import express from 'express';
import { getInfo } from '../controllers/user.controller.js';

const router = express.Router();

router.get('/me', getInfo);

export default router;