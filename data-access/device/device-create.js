
const DeviceModel=require('../../models/device.model');
const profiledb=require('mongoose').connection.collection('device_data');

const createUser=(reqData)=>{
    return new Promise((resolve,reject)=>{
    
    const profile=parseDatafromRequestData(reqData)
    profiledb.insertOne(profile)
        .then((value)=>resolve({result:value.result,profile:value.ops[0]}))
        .catch((reason)=>reject(reason))
    })
}

const parseDatafromRequestData=(reqData)=>{
    return DeviceModel({
        _id:reqData._id,
        name:reqData.name,
        hubID:reqData.hubID,
        connStatus:reqData.connStatus,
        deviceState:reqData.deviceState,
        value:reqData.value,
        createdAt:reqData.createdAt,
        modifiedAt:reqData.modifiedAt,
    })
}
module.exports=createUser;