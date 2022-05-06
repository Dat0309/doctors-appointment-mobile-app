import mongoose from "mongoose";

const specializationSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const Specialization = mongoose.model("Specialization", specializationSchema);

export default Specialization;