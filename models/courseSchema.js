const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
      name: {
        type: String,
        required:[true, "Name is required"],
        trim: true,
    },
      description: {
        type: String,
        required:[true, "Description is required"],
        
    },
      createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: [true, "Created by is required"]
    },
      classes: [
        { 
            type: mongoose.Schema.Types.ObjectId,
            ref: "Class"
        },
    ],
      slug:{
      type:String,
      required:[true,'Slug is required'],
      unique:[true,'Slug must be unique']
    },
},{timestamps: true,versionKey: false})

module.exports = mongoose.model("Course", courseSchema);