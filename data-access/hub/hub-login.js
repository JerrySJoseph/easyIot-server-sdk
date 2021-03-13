
const HubModel=require('../../models/hub.model');
const hubDB=require('mongoose').connection.collection('hub_data');
const bcrypt=require('bcrypt');
const {signAccessToken,signRefreshToken}=require('../../helpers/jwt_helper');

const LoginHub=(reqData)=>{
    return new Promise((resolve,reject)=>{
    
  hubDB.findOne({name:reqData.name}, (error,result)=>{
      if(error)
        return reject({success:false,msg:error});
      else if(!result)
        return reject({success:false,msg:"Hub name or password is incorrect"});
       
      else
      {
        bcrypt.compare(reqData.password,result.password,async (error,isSame)=>{
          
          if(!isSame)
            return reject({success:false,msg:"Incorrect password or Hub name"})
          else
             {
               const accesToken=await signAccessToken(result._id);
               const refreshToken=await signRefreshToken(result._id);
               
               return resolve(
                 {
                   success:true,
                   msg:{
                     id:result._id,
                     name:result.name,
                     accessToken:accesToken,
                     refreshToken:refreshToken
                    }
                  });
              }

        })
      }

      

  })
    
})
}
module.exports=LoginHub;