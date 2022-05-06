import mongoose from "mongoose";

const companySchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        province: {
            type: String,
            required: true,
        },
        district: {
            type: String,
            required: true,
        },
        ward:{
            type: String,
            required: true,
        },
        street: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const Company = mongoose.model("Company", companySchema);

export default Company;