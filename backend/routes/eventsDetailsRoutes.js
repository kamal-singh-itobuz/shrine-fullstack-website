import {Router} from 'express';
import {currentEventController, sidebarController} from '../controllers/eventsDetailsControllers.js';

const router = Router();
router.get('/current-event', currentEventController);
router.get('/sidebar', sidebarController);

export default router;