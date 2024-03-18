import asyncHandler from 'express-async-handler';
import {heroImagesData, membersData} from '../data/pastorData.js';

const heroController = asyncHandler(async (req, res) => {
    res.status(200).json(heroImagesData);
});
const membersController = asyncHandler(async (req, res) => {
    res.status(200).json(membersData);
});

export {heroController, membersController};