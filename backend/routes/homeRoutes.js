import {Router} from 'express';
import {satisfactionController, membersController, eventsController, articleController} from '../controllers/homeControllers.js';

const router = Router();

router.get('/satisfaction', satisfactionController);
router.get('/members', membersController);
router.get('/events', eventsController);
router.get('/articles', articleController);

export default router;
