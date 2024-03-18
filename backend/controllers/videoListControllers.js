import asyncHandler from 'express-async-handler';
import { videoListData } from '../data/videoListData.js';

const ourBibleController = asyncHandler(async (req, res) => {
    res.status(200).json(videoListData);
});

export {ourBibleController};