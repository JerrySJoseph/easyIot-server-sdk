//import required dependencies
const express=require('express');
const profiledb=require('./db/device-database');
const profileRouter=require('./routes/device-route');
const hubRouter=require('./routes/hub-route');
const iotEngine=require('./Iot-Engine');
const CacheStore=require('./custom-cacheStore/CacheStore')

//Assigning port 
const REQ_PORT= process.env.PORT || 3000;
const SOCKET_PORT= 3001;


const apiVersion="v1";

//Initialising express app
const app=express();

iotEngine.initEngine(app,SOCKET_PORT)

app.use(express.static(__dirname + '/public'));
//enable json in request 
app.use(express.json())

//Registering all queues
function registerRoutesAndStartListening()
{
    //Routes for profile functions
    app.use(`/api/${apiVersion}/device`,profileRouter);
    //Routes for profile functions
    app.use(`/api/${apiVersion}/hub`,hubRouter);

    //Start listening for requests on PORT
    app.listen(REQ_PORT,()=>
        console.log("CRUD Server is listening on localhost:"+REQ_PORT))
}

//Connecting to all essential databases before firing up the API
Promise.all([profiledb.ConnectToDb()])
    .then(()=>{
        console.log("Connected to All Databases")
        registerRoutesAndStartListening();
    })
    .catch((err)=>console.log(err));

    

