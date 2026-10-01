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
    slug:{
      type:String,
      required:[true,'Slug is required'],
      unique:[true,'Slug must be unique']
    },
}, {timestamps: true, versionKey: false})

module.exports = mongoose.model('Class', classSchema);