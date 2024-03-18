import {Router} from 'express';
import { heroController, membersController } from '../controllers/pastorControllers.js';
const router = Router();

router.get('/hero', heroController);
router.get('/members', membersController);

export default router;