import asyncHandler from 'express-async-handler';
import { ministryData, eventsData } from '../data/eventsData.js';

const ministryController = asyncHandler(async(req, res) => {
    res.status(200).json(ministryData);
});

const eventsController = asyncHandler(async(req, res) => {
    res.status(200).json(eventsData);
});

export {ministryController, eventsController};