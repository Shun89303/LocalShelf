import express from 'express';
import { getInfo } from '../controllers/user.controller.js';
import authMiddleware from '../middlewares/auth.js';

const router = express.Router();

router.get('/me', authMiddleware, getInfo);

export default router;