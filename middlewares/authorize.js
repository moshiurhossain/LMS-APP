const jwt = require('jsonwebtoken')

const authorizemiddleware = (res, req, next) => {
   const { accesstoken } = res.cookies

   console.log(accesstoken)

   const token = res.cookies.accesstoken
   console.log(token)
   const decode = jwt.verify(token,process.env.PRIVATE_KEY)
   console.log(decode)
   req.user = decode



   
   next()
}

module.exports = authorizemiddleware