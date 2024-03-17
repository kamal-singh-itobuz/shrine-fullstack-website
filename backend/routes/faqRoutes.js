import { Router } from 'express';
import { heroController, faqsController } from '../controllers/faqController.js';

const router = Router();
router.get('/hero', heroController);
router.get('/faqs', faqsController);

export default router;