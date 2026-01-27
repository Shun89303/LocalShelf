import express from 'express';
import auth from './auth.router.js';
import user from './user.router.js';
import product from './product.router.js';

const router = express.Router();

router.use('/auth', auth);
router.use('/users', user);
router.use('/products', product);

export default router;