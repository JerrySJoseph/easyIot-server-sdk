
const HubModel=require('../../models/hub.model');
const hubDB=require('mongoose').connection.collection('hub_data');

const LoginHub=(reqData)=>{
    return new Promise((resolve,reject)=>{
    
  hubDB.findOne({ $and:[{name:reqData.name},{password:reqData.password}]},(error,result)=>{
      if(error)
       return reject({success:false,msg:error});
       if(!result)
      return reject({success:false,msg:"Hub name or password is incorrect"});
       
       resolve({success:true,msg:{id:result._id,name:result.name}});

  })
    
})
}
module.exports=LoginHub;