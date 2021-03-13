const JWT= require('jsonwebtoken');

const sDefaultExpirationTime='15m';
const sDefaultRefreshExpirationTime='1h';
const sDefaultIssuerName='easy-iot-server';

const signAccessToken=(hubID)=>{
    return new Promise((resolve,reject)=>{
        const payload={id:hubID}
        const secret=process.env.JWT_ACCESS_SECRET;
        const options={
            expiresIn:sDefaultExpirationTime,
            issuer:sDefaultIssuerName
        }

        JWT.sign(payload,secret,options,(error,token)=>{
            if(error)
                reject(error)
            else if(token)
                resolve(token);
        })
    })
}

const verfifyAccessToken=(token)=>{
    return new Promise((resolve,reject)=>{
        try{
            JWT.verify(token,process.env.JWT_ACCESS_SECRET,(err,payload)=>{
                    if(err)
                    {
                        
                        const msg=err.name==='JsonWebTokenError'?{name:'JsonWebTokenError',message:'Unauthorized'}:err
                        return reject(msg);
                    }
                resolve(payload);
            })
        }catch(e)
        {
            console.log(e);
            reject(e);
        }
         
    })
}

const signRefreshToken=(hubID)=>{
    return new Promise((resolve,reject)=>{
        const payload={id:hubID}
        const secret=process.env.JWT_REFRESH_SECRET;
        const options={
            expiresIn:sDefaultRefreshExpirationTime,
            issuer:sDefaultIssuerName
        }

        JWT.sign(payload,secret,options,(error,token)=>{
            if(error)
                reject(error)
            else if(token)
                resolve(token);
        })
    })
}

const verfifyRefreshToken=(token)=>{
    return new Promise((resolve,reject)=>{
        try{
            JWT.verify(token,process.env.JWT_REFRESH_SECRET,(err,payload)=>{
                    if(err)
                    {
                        
                        const msg=err.name==='JsonWebTokenError'?{name:'JsonWebTokenError',message:'Unauthorized'}:err
                        return reject(msg);
                    }
                resolve(payload);
            })
        }catch(e)
        {
            console.log(e);
            reject(e);
        }
         
    })
}

module.exports={
    signAccessToken,
    verfifyAccessToken,
    signRefreshToken,
    verfifyRefreshToken
}

