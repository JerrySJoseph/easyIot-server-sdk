//import required dependencies
const router= require('express').Router();
const profileValidator=require('../helpers/device-validator');
const CreateProfile=require('../data-access/device/device-create');
const UpdateProfile=require('../data-access/device/device-update');
const DeleteProfile=require('../data-access/device/device-delete');
const ReadProfile=require('../data-access/device/device-read');

//Create Route
router.post('/create',profileValidator.createValidator,(req,res)=>{
    CreateProfile(req.body)
    .then((value)=>res.status(200).send(value))
    .catch((reason)=>res.status(400).send(reason))
})
//Read Route
router.get('/read/:name',(req,res)=>{
     ReadProfile.readUser({name:req.params.name})
        .then(users=>res.status(200).send(users))
        .catch(error=>res.status(400).send(error))
})
//Read all Route
router.get('/read',(req,res)=>{
    ReadProfile.readAllUsers()
        .then(users=>res.status(200).send(users))
        .catch(error=>res.status(400).send(error))
})
//Update Route
router.post('/update/:_id',profileValidator.updateValidator,(req,res)=>{

    UpdateProfile(req.params._id,req.body)
    .then((value)=>res.status(200).send(value))
    .catch((reason)=>res.status(400).send(reason))
})
//Delete Route
router.post('/delete',profileValidator.deleteValidator,(req,res)=>{
    DeleteProfile(req.body)
    .then((value)=>res.status(200).send(value))
    .catch((reason)=>res.status(400).send(reason))
})

module.exports=router;