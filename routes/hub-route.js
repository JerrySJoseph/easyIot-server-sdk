const router=require('express').Router()
const CreateHub=require('../data-access/hub/hub-create')
const ReadHub=require('../data-access/hub/hub-read')
const updateHUB=require('../data-access/hub/hub-update')
const deleteHUB=require('../data-access/hub/hub-delete')
const hubValidator=require('../helpers/hub-validator')
const LoginHub = require('../data-access/hub/hub-login')
const {isAuthorized}=require('../helpers/auth-validator')

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

router.post('/connect',isAuthorized,(req,res)=>{
   res.status(200).send('connected');
})

router.post('/refresh-token',(req,res)=>{
   res.status(200).send('connected');
})
module.exports=router;