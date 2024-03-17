import asyncHandler from 'express-async-handler';
import { aboutusNumbers, walkingSectionData } from '../data/aboutusData.js';

const numbersController = asyncHandler(async (req, res) => {
    res.status(200).json(aboutusNumbers);
});
const walkingController = asyncHandler(async (req, res) => {
    res.status(200).json(walkingSectionData);
});

export {numbersController, walkingController};