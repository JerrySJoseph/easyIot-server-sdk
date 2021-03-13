
const HubModel=require('../../models/hub.model');
const hubDB=require('mongoose').connection.collection('hub_data');
const bcrypt=require('bcrypt');

const CreateHub=(reqData)=>{
    return new Promise(async (resolve,reject)=>{
    
    var hub=await hubDB.findOne({name:reqData.name})
    if(hub)
        {
            reject(prepareResponseObject(false,"Hub with same name already exixts in the server"));
            return;
        }
        else
        {
            const profile=await parseDatafromRequestData(reqData)
            hubDB.insertOne(profile)
                .then((value)=>resolve(prepareResponseObject(true,value.ops[0])))
                .catch((reason)=>reject(prepareResponseObject(false,reason)))
            
        }
    })
}
const prepareResponseObject=(isSuccess,msg)=>
{
    return {
        success:isSuccess,
        msg:msg
    }
}
 
const parseDatafromRequestData=async (reqData)=>{
    //hashing Pasword
    const salt=await bcrypt.genSalt(10);
    const hashedPassword=await bcrypt.hash(reqData.password,salt)
   
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
        hashedPassword
    )
}
module.exports=CreateHub;