const loginController =(req,res)=>{
    res.status(200).json({ message: "Login successful" })
}

module.exports = {loginController}