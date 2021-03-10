
const hubDB=require('mongoose').connection.collection('hub_data');
const {ObjectId}= require('mongodb')

const deleteHUB=(reqData)=>{
    return new Promise((resolve,reject)=>{
    hubDB.findOneAndDelete({_id:ObjectId(reqData._id)})
        .then(()=>resolve(prepareResponseObject(true,"Hub Deleted Successfully")))
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

module.exports=deleteHUB;