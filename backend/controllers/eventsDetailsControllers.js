import asyncHandler from 'express-async-handler';
import {currentEventData, sidebarData} from '../data/eventDetailsData.js';

const currentEventController = asyncHandler(async (req, res) => {
    res.status(200).json(currentEventData);
});
const sidebarController = asyncHandler(async (req, res) => {
    res.status(200).json(sidebarData);
});

export {currentEventController, sidebarController};