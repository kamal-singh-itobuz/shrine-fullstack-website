import asyncHandler from "express-async-handler";
import { galleryImages } from "../data/galleryData.js";

const allImagesController = asyncHandler(async (req, res) => {
    res.status(200).json(galleryImages);
});
const churchImagesController = asyncHandler(async (req, res) => {
    res.status(200).json(galleryImages.filter(ele => ele.category === 'church'));
});
const donationImagesController = asyncHandler(async (req, res) => {
    res.status(200).json(galleryImages.filter(ele => ele.category === 'donation'));
});
const charityImagesController = asyncHandler(async (req, res) => {
    res.status(200).json(galleryImages.filter(ele => ele.category === 'charity'));
});
const educationImagesController = asyncHandler(async (req, res) => {
    res.status(200).json(galleryImages.filter(ele => ele.category === 'education'));
});

export {allImagesController, churchImagesController, donationImagesController, charityImagesController, educationImagesController};
