
const HubModel=require('../../models/hub.model');
const hubDB=require('mongoose').connection.collection('hub_data');
const ObjectId =require('mongodb').ObjectId

const updateHUB=(id,reqData)=>{
    return new Promise((resolve,reject)=>{
        
    hubDB.findOneAndUpdate({_id:ObjectId(id)},{$set:reqData})
        .then((value)=>{
            resolve(prepareResponseObject(true,"Hub updated successfully"))
        })
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
module.exports=updateHUB;