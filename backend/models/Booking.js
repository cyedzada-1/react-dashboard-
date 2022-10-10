import mongoose from "mongoose";
const BookingSchema = new mongoose.Schema({
  gender: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  surName: {
    type: String,
    required: true,
  },
  dob: {
    type: String,
    required: true,
  },
  cnic: {
    type: Number,
    required: true,
  },
  passportString: {
    type: String,
   
  },
  phone: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  pnr: {
    type: String,
    required: true,
  },
  ticket: {
    type: Number,
    required: true,
  },
  to: {
    type: String,
    required: true,
  },
  from: {
    type: String,
    required: true,
  },
  issueBy: {
    type: String,
    required: true,
  },
  issueDate: {
    type: String,
    required: true,
  },
  travelDate: {
    type: String,
    required: true,
  },
  legder: {
    type: String,
   
  },
  cabin: {
    type: String,
   
  },
  infant: {
    type: Boolean,
    default: false,
  },
  basicFare: {
    type: Number,
    required: true,
  },
  taxes: {
    type: Number,
  },
  sc: {
    type: Number,
  },
  discount: {
    type: Number,
  },
  totalAmount: {
    type: Number,
    required: true,
  },
  receipt: {
    type: String,
  },
  verifyDetails: {
    type: Boolean,
    default: false,
    required: true,
  },
});

export default mongoose.model("Booking", BookingSchema);
