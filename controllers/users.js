const res = require("express/lib/response")

exports.getPosts=((req,res,next)=>{
    res.status(200).json({
        posts:[{title:"First post",content:"This is my first post",createdAt:{name:"Deepa"}}]
    })
})