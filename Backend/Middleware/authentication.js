require("dotenv").config()
const jwt= require("jsonwebtoken")


const authentication = (req,res,next) => {
    if(!req.headers.authorization) return res.send({message:"Please SignIn first."})
    const token = req.headers.authorization.split(" ")[1]
    jwt.verify(token,process.env.secretKey,(err,decode)=>{
        if(err) return res.send({message:"Please SignIn first."})
        req.body.userId = decode.userId
        next()
    })
}

module.exports = authentication