// const jwt = require('jsonwebtoken')

// const authorizemiddleware = (req, res, next) => {
//    const { accesstoken } = req.cookies

//    console.log(accesstoken)

//    const token = req.cookies.accesstoken
//    console.log(token)
//    const decode = jwt.verify(token,process.env.PRIVATE_KEY)
//    console.log(decode)
//    res.user = decode

//    next()
// }

// module.exports = authorizemiddleware
const jwt = require("jsonwebtoken");

const authorizemiddleware = (req, res, next) => {
    try {
        const token = req.cookies.accesstoken;

        console.log("TOKEN:", token);

        const decode = jwt.verify(
            token,
            process.env.PRIVATE_KEY
        );

        console.log("DECODE:", decode);

        req.user = decode;

        console.log("REQ.USER FROM MIDDLEWARE:", req.user);

        next();
    } catch (error) {
        console.log("AUTH ERROR:", error.message);

        return res.status(401).json({
            success: false,
            message: error.message,
            data: null
        });
    }
};

module.exports = authorizemiddleware;