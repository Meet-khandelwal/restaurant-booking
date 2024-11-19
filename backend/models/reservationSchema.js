import mongoose from "mongoose";
import validator from "validator";

const reservationSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        minLength:[2,"First Name must contain 2 characters."],
        maxLength:[20,"First Name can not exceed 20 characters."]
    },
    lastName:{
        type:String,
        required:true,
        minLength:[2,"Last Name must contain 2 characters."],
        maxLength:[20,"Last Name can not exceed 20 characters."]
    },
    
  
    email:{
        type:String,
        required:true,
        validate:[validator.isEmail,"Provide a valid email"],
    },
    phone: {
    type: String,
    required: true,
    minLength: [10, "Phone number must contain 10 Digits."],
    maxLength: [10, "Phone number must contain 10 Digits."],
  },
  time: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
});

export const Reservation = mongoose.model("Reservation", reservationSchema);