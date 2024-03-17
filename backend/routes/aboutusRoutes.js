import {Router} from 'express';
import { numbersController, walkingController  } from '../controllers/aboutusControllers.js';

const router = Router();

router.get('/stats', numbersController);
router.get('/walking', walkingController);

export default router;