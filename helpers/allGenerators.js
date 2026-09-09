// generate a 6 digit otp
const generateOtp = () => {
    return Math.floor(100000 + Math.random() * 900000);
};
// generate otp expiry time
const otpExpiryTime = () => {
    return Date.now() + 10 * 60 * 1000; // 10 minutes from now
};
// cupon expiry time
const expiryTimeCupon = () => {
    return new Date(Date.now() + 20 * 24 * 60 * 60 * 1000); // 20 days from now
};


module.exports = { 
    generateOtp,
    otpExpiryTime,
    expiryTimeCupon,
}