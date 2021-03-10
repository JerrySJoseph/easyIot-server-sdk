
const DeviceModel=require('../../models/device.model');
const profiledb=require('mongoose').connection.collection('device_data');
const ObjectId =require('mongodb').ObjectId

const updateUser=(id,reqData)=>{
    return new Promise((resolve,reject)=>{
    
  //  const profile=parseDatafromRequestData(reqData)
    console.log(id);
    console.log(reqData);
    profiledb.findOneAndUpdate({_id:ObjectId(id)},{$set:reqData})
        .then((value)=>{
            resolve(value)
        })
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
module.exports=updateUser;