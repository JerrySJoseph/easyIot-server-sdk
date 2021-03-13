const {verfifyRefreshToken}=require('../../helpers/jwt_helper');

const verifyMyRefreshToken=async (token)=>{
    return new Promise((resolve,reject)=>{
       try{
           const id=await verfifyRefreshToken(token);
       }catch(e)
       {
           reject(e);
       }
        
    })
}

module.exports={
    verifyMyRefreshToken
}