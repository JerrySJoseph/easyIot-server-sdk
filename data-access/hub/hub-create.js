
const HubModel=require('../../models/hub.model');
const hubDB=require('mongoose').connection.collection('hub_data');

const CreateHub=(reqData)=>{
    return new Promise((resolve,reject)=>{
    
  hubDB.findOne({name:reqData.name},(error,result)=>{
      if(result)
       reject({success:false,msg:"Hub with same name exists"});
  })
    const profile=parseDatafromRequestData(reqData)
    hubDB.insertOne(profile)
        .then((value)=>resolve(prepareResponseObject(true,value.ops[0])))
        .catch((reason)=>reject(prepareResponseObject(false,reason)))
    })
}
const prepareResponseObject=(isSuccess,msg)=>
{
    return {
        success:isSuccess,
        msg:msg
    }
}
 
const parseDatafromRequestData=(reqData)=>{
    return HubModel(
        reqData.name,
        reqData.connStatus,
        reqData.devices,
        reqData.deviceCount,
        reqData.createdAt,
        reqData.modifiedAt,
        reqData.authToken,
        reqData.refToken,
        reqData.lastConnect,
        reqData.lastDisconnect,
        reqData.password
    )
}
module.exports=CreateHub;