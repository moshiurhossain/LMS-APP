const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
      name: {
        type: String,
        required:[true, "Name is required"],
        trim: true,
    },
    //   bannerImage: {
    //     type: String,
    //     required: [true, "Banner image is required"],
    //   },
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
            ref: "Class",
            default: [],
        },
    ],
      slug:{
      type:String,
      required:[true,'Slug is required'],
      unique:[true,'Slug must be unique']
    },
    subscribedUsers: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    ]
},{timestamps: true,versionKey: false})

module.exports = mongoose.model("Course", courseSchema);