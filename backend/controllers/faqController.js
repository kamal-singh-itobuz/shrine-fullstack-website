import expressAsyncHandler from "express-async-handler";
import { heroImagesData, faqSectionData } from "../data/faqData.js";

const heroController = expressAsyncHandler(async (req, res) => {
    res.status(200).json(heroImagesData);
});
const faqsController = expressAsyncHandler(async (req, res) => {
    res.status(200).json(faqSectionData);
});

export {heroController, faqsController};