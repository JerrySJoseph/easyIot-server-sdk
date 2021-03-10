const hubDB=require('mongoose').connection.collection('hub_data');

const readAllHubs=()=>{
    return new  Promise(async(resolve,reject)=>{
        const all_data = [];
        const results=await hubDB.find({});
        await results.forEach(doc=>all_data.push(doc))
        return resolve(prepareResponseObject(true,all_data))
        
    })
}
const readHub=(reqData)=>{
    return new  Promise(async(resolve,reject)=>{
        const all_data = [];
        console.log()
        const results=await hubDB.find(reqData);
        await results.forEach(doc=>all_data.push(doc))
        return resolve(prepareResponseObject(true,all_data))
    })
}
const prepareResponseObject=(isSuccess,msg)=>
{
    return {
        success:isSuccess,
        msg:msg
    }
}
module.exports={readAllHubs,readHub};