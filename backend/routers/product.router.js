import express from 'express';
import multerUpload from '../middlewares/upload.js';
import authMiddleware from '../middlewares/auth.js';
import { upload } from '../controllers/user.controller.js';
import { getProfileImages } from '../controllers/user.controller.js';
import { getAllImages } from '../controllers/user.controller.js';

const router = express.Router();

router.post( '/', authMiddleware, multerUpload.array('images', 5), upload);

router.get('/me', authMiddleware, getProfileImages);

router.get('/all', getAllImages);

export default router;