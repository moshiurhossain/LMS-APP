const authorizemiddleware = (req, res, next) => {
   const { accesstoken } = req.cookies

   console.log(accesstoken)



   
   next()
}

module.exports = authorizemiddleware