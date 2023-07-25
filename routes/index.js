import { Router } from 'express';
import quoteRoutes from './quoteRoutes.js';

const router = Router();

router.get('/', (req, res) => {
  res.send('This is the API root!')
});

router.use('/quotes', quoteRoutes);

export default router;