import {Router} from 'express';
import { ministryController, eventsController } from '../controllers/eventsControllers.js';

const router = Router();

router.get('/ministries', ministryController);
router.get('/all-events', eventsController);

export default router;