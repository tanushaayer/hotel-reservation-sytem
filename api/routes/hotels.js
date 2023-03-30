import express from "express";
import Hotel from "../models/Hotels.js";

const router = express.Router();

//CREATE
router.post("/", async (req, res) => {
  const newHotel = new Hotel(req.body);
  try {
    const savedHotel = await newHotel.save();
    res.status(200).json(savedHotel);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/", (req, res) => {
  res.send("Hello, this is hotels endpoint");
});

export default router;
