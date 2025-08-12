import { Router } from 'express';
import usersRoutes from './users.routes.js';

const router = Router();

router.use('/users', usersRoutes);
// router.use('/order', orderRoutes);
// router.use('/product',productRoutes)

export default router;
