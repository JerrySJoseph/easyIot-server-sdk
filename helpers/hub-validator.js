
   

const createValidator=({body},res,next)=>{
    if(!body)
        return res.status(400).send("No post Data")
    if(!body.name)
        return res.status(400).send("No Name specified for device")
    if(!body.password)
        return res.status(400).send("No password specified for device")
    if(!body.createdAt)
       body.createdAt= Date()
    next();
}
const readValidator=({params},res,next)=>{
    if(!params)
        return res.status(400).send("No Parameter Data")
    if(!params.name || !params._id)
        return res.status(400).send("No Id or Name specified to read device")
    next();
}
const updateValidator=({params},res,next)=>{
    if(!params)
        return res.status(400).send("No post Data")
    if(!params._id)
        return res.status(400).send("No id specified for device")    
    next();
}
const deleteValidator=(req,res,next)=>{
    if(!req.body)
        return res.status(400).send("No post Data")
    if(!req.params._id)
        return res.status(400).send("No id specified for device")
    
    next();
}
module.exports={createValidator,readValidator,updateValidator,deleteValidator};