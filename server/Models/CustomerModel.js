import mongoose from "mongoose";

const customerSchema = mongoose.Schema(
    {
        user_id: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "User",
        },
        first_name: {
            type: String,
            required: true,
        },
        last_name: {
            type: String,
            required: true,
        },
        date_of_birth: {
            type: String,
            required: true,
        },
        genre: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        telephone: {
            type: String,
            required: true,
        },
        avatar_url: {
            type: String,
            required: true,
        },
        facebook_id: {
            type: String,
        },
        zalo_id: {
            type: String,
        },
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
        latitute: {
            type: String,
            required: true,
        },
        longtitute: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const Customer = mongoose.model("Customer", customerSchema);

export default Customer;