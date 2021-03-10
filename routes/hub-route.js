const router=require('express').Router();
const CreateHub=require('../data-access/hub/hub-create');
const ReadHub=require('../data-access/hub/hub-read');
const updateHUB=require('../data-access/hub/hub-update');
const deleteHUB=require('../data-access/hub/hub-delete');
const loginHUB=require('../data-access/hub/hub-login');

const hubValidator=require('../helpers/hub-validator');
const LoginHub = require('../data-access/hub/hub-login');

router.post('/register',hubValidator.createValidator,(req,res)=>{
    CreateHub(req.body)
    .then((value)=>res.status(200).send(value))
    .catch((reason)=>res.status(400).send(reason))
})

router.post('/login',(req,res)=>{
    LoginHub(req.body)
    .then((value)=>res.status(200).send(value))
    .catch((reason)=>res.status(400).send(reason))
})

router.get('/read',(req,res)=>{
    ReadHub.readAllHubs()
    .then((value)=>res.status(200).send(value))
    .catch((reason)=>res.status(400).send(reason))
})

router.get('/read/:name',(req,res)=>{
    ReadHub.readHub({name:req.params.name})
    .then((value)=>res.status(200).send(value))
    .catch((reason)=>res.status(400).send(reason))
})
router.put('/update/:_id',(req,res)=>{
    
    updateHUB(req.params._id,req.body)
    .then((value)=>res.status(200).send(value))
    .catch((reason)=>res.status(400).send(reason))
})

router.delete('/delete',(req,res)=>{
    deleteHUB(req.body)
    .then((value)=>res.status(200).send(value))
    .catch((reason)=>res.status(400).send(reason))
})
module.exports=router;