import express from "express";
import asyncHandler from "express-async-handler";
import Doctor from "../Models/DoctorModel.js";
import { admin, protect } from "./../Middleware/AuthMiddleware.js";

const doctorRoute = express.Router();

//GET ALLL DOCTOR
doctorRoute.get(
    "/",
    asyncHandler(async (req, res) => {
        const pageSize = 12;
        const page = Number(req.query.pageNumber) || 1;
        const keyword = req.query.keyword
            ? {
                name: {
                    $regex: req.query.keyword,
                    $options: "i",
                },
            }
            : {};

        const count = await Doctor.countDocuments({ ...keyword });
        const doctors = await Doctor.find({ ...keyword })
            .limit(pageSize)
            .skip(pageSize * (page - 1))
            .sort({ _id: -1 });

        res.json({ doctors, page, pages: Math.ceil(count / pageSize) });
    })
);

// ADMIN GET ALL DOCTOR WITHOUT SEARCH AND PEGINATION
doctorRoute.get(
    "/all",
    protect,
    admin,
    asyncHandler(async (req, res) => {
        const doctors = await Doctor.find({}).sort({ _id: -1 });
        res.json(doctors);
    })
);

// GET SINGLE DOCTOR
doctorRoute.get(
    "/:id",
    asyncHandler(async (req, res) => {
        const doctor = await Doctor.findById(req.params.id);
        if (doctor) {
            res.json(doctor);
        } else {
            res.status(404);
            throw new Error("doctor not Found");
        }
    })
);

// doctor REVIEW
doctorRoute.post(
    "/:id/review",
    protect,
    asyncHandler(async (req, res) => {
        const { rating, comment } = req.body;
        const doctor = await Doctor.findById(req.params.id);

        if (doctor) {
            const alreadyReviewed = doctor.reviews.find(
                (r) => r.user.toString() === req.user._id.toString()
            );
            if (alreadyReviewed) {
                res.status(400);
                throw new Error("doctor already Reviewed");
            }
            const review = {
                name: req.user.name,
                rating: Number(rating),
                comment,
                user: req.user._id,
            };

            doctor.reviews.push(review);
            doctor.numReviews = doctor.reviews.length;
            doctor.rating =
                doctor.reviews.reduce((acc, item) => item.rating + acc, 0) /
                doctor.reviews.length;

            await doctor.save();
            res.status(201).json({ message: "Reviewed Added" });
        } else {
            res.status(404);
            throw new Error("doctor not Found");
        }
    })
);

// DELETE doctor
doctorRoute.delete(
    "/:id",
    protect,
    admin,
    asyncHandler(async (req, res) => {
        const doctor = await Doctor.findById(req.params.id);
        if (doctor) {
            await doctor.remove();
            res.json({ message: "doctor deleted" });
        } else {
            res.status(404);
            throw new Error("doctor not Found");
        }
    })
);

// CREATE doctor
doctorRoute.post(
    "/",
    protect,
    admin,
    asyncHandler(async (req, res) => {
        const { user_id, first_name, last_name, date_of_birth, genre,
            description, telephone, avatar_url,
            province, district, ward, street,
            level_of_education, rating, numReviews, specializations, company_id } = req.body;
        const doctorExist = await Doctor.findOne({ user_id });
        if (doctorExist) {
            res.status(400);
            throw new Error("doctor name already exist");
        } else {
            const doctor = new Doctor({
                user_id,
                first_name,
                last_name,
                date_of_birth,
                genre,
                description,
                telephone,
                avatar_url,
                province,
                district,
                ward,
                street,
                level_of_education,
                rating,
                numReviews,
                specializations,
                company_id,
                user: req.user._id,
            });
            if (doctor) {
                const createddoctor = await doctor.save();
                res.status(201).json(createddoctor);
            } else {
                res.status(400);
                throw new Error("Invalid doctor data");
            }
        }
    })
);

// UPDATE doctor
doctorRoute.put(
    "/:id",
    protect,
    admin,
    asyncHandler(async (req, res) => {
        const { user_id, first_name, last_name, date_of_birth, genre,
            description, telephone, avatar_url,
            province, district, ward, street,
            level_of_education, rating, numReviews, specializations, company_id } = req.body;
        const doctor = await Doctor.findById(req.params.id);
        if (doctor) {
            doctor.user_id = user_id || doctor.user_id;
            doctor.first_name = first_name || doctor.first_name;
            doctor.last_name = last_name || doctor.last_name;
            doctor.date_of_birth = date_of_birth || doctor.date_of_birth;
            doctor.genre = genre || doctor.genre;
            doctor.description = description || doctor.description;
            doctor.telephone = telephone || doctor.telephone;
            doctor.avatar_url = avatar_url || doctor.avatar_url;
            doctor.province = province || doctor.province;
            doctor.district = district || doctor.district;
            doctor.ward = ward || doctor.ward;
            doctor.street = street || doctor.street;
            doctor.level_of_education = level_of_education || doctor.level_of_education;
            doctor.rating = rating || doctor.rating;
            doctor.numReviews = numReviews || doctor.numReviews;
            doctor.specializations = specializations || doctor.specializations;
            doctor.company_id = company_id || doctor.company_id;

            const updateddoctor = await doctor.save();
            res.json(updateddoctor);
        } else {
            res.status(404);
            throw new Error("doctor not found");
        }
    })
);
export default doctorRoute;