import {Router} from 'express';
import { ourBibleController } from '../controllers/videoListControllers.js';

const router  = Router();
router.get('/our-bible', ourBibleController);

export default router;