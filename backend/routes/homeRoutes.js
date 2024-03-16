import {Router} from 'express';
import {satisfactionController, membersController, eventsController, articleController, subscribeController} from '../controllers/homeControllers.js';

const router = Router();

router.get('/satisfaction', satisfactionController);
router.get('/members', membersController);
router.get('/events', eventsController);
router.get('/articles', articleController);
router.post('/articles/subscribe', subscribeController);

export default router;
