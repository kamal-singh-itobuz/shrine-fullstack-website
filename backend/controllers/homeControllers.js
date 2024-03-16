import asyncHandler from 'express-async-handler';
import {satisfactionCardsData, membersSection, eventSection, articleSection} from '../data/homeData.js';

const satisfactionController = asyncHandler(async (req, res) => {
    res.status(200).json(satisfactionCardsData);
});
const membersController = asyncHandler(async (req, res) => {
    res.status(200).json(membersSection);
});
const eventsController = asyncHandler(async (req, res) => {
    res.status(200).json(eventSection);
});
const articleController = asyncHandler(async (req, res) => {
    res.status(200).json(articleSection);
});

export {satisfactionController, membersController, eventsController, articleController};