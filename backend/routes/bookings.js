import express from "express";
import {
  createBooking,
  deleteBooking,
  updateBooking,
  getBooking,
  getBookings,
} from "../controllers/Booking.js";
import { verifyUser } from "../utils/verifyToken.js";
const router = express.Router();

//Create Booking
router.post("/", createBooking);
//Booking List
router.get("/list", getBookings);
//Search Booking By Id
router.get("/search/:id", getBooking);
//Update Booking By Id
router.post("/update/:id", updateBooking);
//Delete Booking
router.delete("/delete/:id", deleteBooking);

export default router;
