import { mongoose } from "../../config/database";

interface faculty_interface extends mongoose.Document {
    name: String;
    position: String;
    qualification: String;
    profile_link: String;
    profile_image: String;
    department: String;
    email: String;
    courses_offered: {
        _id: mongoose.Schema.Types.ObjectId;
        code: String;
        semester: String;
    };
    ratings: {
        sample_size: Number;
        engaging: Number;
        interesting_material: Number;
        grading: Number;
        workload: Number;
        attendance: Number;
        TFs: Number;
        holistic: Number;
        compound_score: Number;
    };
}

const faculty_schema = new mongoose.Schema(
    {
        name: { type: String, default: "" },
        position: { type: String, default: "" },
        qualification: { type: String, default: "" },
        profile_link: { type: String, default: "#" },
        profile_image: { type: String, default: "#" },
        department: { type: String, default: "" },
        email: { type: String, default: "" },
        courses_offered: [{
                    _id: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', default: "" },
                    code: [{ type: String, default: "" }],
                    semester: { type: String, default: "" },
                }],
        ratings: {
            sample_size: { type: Number, default: 0 },
            engaging: { type: Number, default: 0 },
            interesting_material: { type: Number, default: 0 },
            grading: { type: Number, default: 0 },
            workload: { type: Number, default: 0 },
            attendance: { type: Number, default: 0 },
            TFs: { type: Number, default: 0 },
            holistic: { type: Number, default: 0 },
            compound_score: { type: Number, default: 0 },
        },
    },
    {
        collection: "faculty",
    }
);

export const Prof = mongoose.model<faculty_interface>("Prof", faculty_schema);
