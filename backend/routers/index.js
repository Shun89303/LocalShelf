import express from 'express';
import auth from './auth.router.js';
import user from './user.router.js';

const router = express.Router();

router.use('/auth', auth);
router.use('/users', user);

export default router;