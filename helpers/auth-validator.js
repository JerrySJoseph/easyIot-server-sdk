
const {verfifyAccessToken}=require('../helpers/jwt_helper');

const isAuthorized=(req,res,next)=>{
    if(!req.headers['authorization'])
       return res.status(401).send({success:false,msg:"You are not authorized to aceess this route"})
    else
    {
        const token=req.headers['authorization'].split(' ')[1];
        verfifyAccessToken(token)
        .then(payload=>{req.payload=payload; next()})
        .catch(err=>{res.status(401).send({success:false,msg:err})})
    }
}

module.exports={
    isAuthorized
}