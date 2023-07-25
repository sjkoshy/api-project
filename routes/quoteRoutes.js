import { Router } from 'express';
import { getQuotes, getQuote, createQuote, updateQuote, deleteQuote } from '../controllers/quotes.js';

const router = Router();

router.get('/', getQuotes);
router.get('/:id', getQuote);
router.post('/', createQuote);
router.put('/:id', updateQuote);
router.delete('/:id', deleteQuote);

export default router;