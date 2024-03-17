import { Router } from 'express';
import {allImagesController, churchImagesController, donationImagesController, charityImagesController, educationImagesController} from '../controllers/galleryControllers.js';

const router = Router();

router.get('/all', allImagesController);
router.get('/church', churchImagesController);
router.get('/donation', donationImagesController);
router.get('/charity', charityImagesController);
router.get('/education', educationImagesController);

export default router;