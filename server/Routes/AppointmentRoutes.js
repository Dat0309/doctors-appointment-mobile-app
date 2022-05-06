import express from "express";
import asyncHandler from "express-async-handler";
import { admin, protect } from "../Middleware/AuthMiddleware.js";
import Appointment from "./../Models/AppointmentModel.js";

const appointmentRouter = express.Router();

// CREATE ORDER
appointmentRouter.post(
  "/",
  protect,
  asyncHandler(async (req, res) => {
    const {
      name,
      province,
      district,
      ward,
      street,
      contact,
      start_time,
      end_time,
    } = req.body;

    if (start_time.length === 0 && end_time.length === 0) {
      res.status(400);
      throw new Error("No appointment time");
      return;
    } else {
      const appointment = new Appointment({
        name,
        doctor: req.doctor._id,
        customer: req.customer._id,
        province,
        district,
        ward,
        street,
        contact,
        start_time,
        end_time,
      });

      const createAppointment = await appointment.save();
      res.status(201).json(createAppointment);
    }
  })
);

// ADMIN GET ALL APPOINTMENT
appointmentRouter.get(
  "/all",
  protect,
  admin,
  asyncHandler(async (req, res) => {
    const appointments = await Appointment.find({})
      .sort({ _id: -1 })
      .populate("user", "id name email");
    res.json(appointments);
  })
);
// USER LOGIN APPOINTMENT
appointmentRouter.get(
  "/",
  protect,
  asyncHandler(async (req, res) => {
    const appointment = await Appointment.find({ user: req.user._id }).sort({ _id: -1 });
    res.json(appointment);
  })
);

// GET APPOINMENT BY ID
appointmentRouter.get(
  "/:id",
  protect,
  asyncHandler(async (req, res) => {
    const appointment = await Appointment.findById(req.params.id).populate(
      "user",
      "name email"
    );

    if (appointment) {
      res.json(appointment);
    } else {
      res.status(404);
      throw new Error("Appointment Not Found");
    }
  })
);

export default appointmentRouter;