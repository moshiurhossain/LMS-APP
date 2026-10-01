const mongoose = require('mongoose');

const classSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        trim: true
    },
    videoUrl: {
        type: String,
        required: [true, "Video URL is required"],

    },
    courseId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course",
        required: [true, "Course ID is required"]
    },    
}, {timestamps: true, versionKey: false})

module.exports = mongoose.model('Class', classSchema);