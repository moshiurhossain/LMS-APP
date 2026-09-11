const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required:[true, "Name is required"],
        trim: true,
    },
    email: {
        type: String,
        required:[true, "Email is required"],
        trim: true,
        unique: [true, "Email already exists"],
    },
    password: {
        type: String,
        required:[true, "Password is required"],
        trim: true,
    },
    phone: {
        type: String,
        required:[true, "Phone is required"],
        trim: true,
    },
    role: {
        type: String,
        enum: ["user", "admin","teacher"],
        default: "user",
    },
     otp:{
        type:Number,
        default:null,
    },
    otp_expiry:{
        type:Date,
        default:null
    },
    isVerified:{
        type:Boolean,
        default:false
    },
        forgetPasswordOtp:{
        type:String,
        default:null,
    },
    forgetPasswordOtpExpiry:{
        type:Date,
        default:null
    },
},{timestamps: true,versionKey: false});

module.exports = mongoose.model("User", userSchema);