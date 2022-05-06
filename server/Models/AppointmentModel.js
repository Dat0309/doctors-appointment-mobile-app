import mongoose from "mongoose";

const appointmentSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        doctor: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "Doctor",
        },
        customer: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "Customer",
        },
        location: {
            province: {
                type: String,
                required: true,
            },
            district: {
                type: String,
                required: true,
            },
            ward: {
                type: String,
                required: true,
            },
            street: {
                type: String,
                required: true,
            },
        },
        contact: {
            type: String,
            required: true,
        },
        start_time: {
            type: String,
            required: true,
        },
        end_time: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const Order = mongoose.model("Order", orderSchema);

export default Order;
