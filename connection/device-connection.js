
const socketio=require('socket.io');

let http = null;
let io=null;



const initConnection=(app,PORT)=>{
    return new Promise((resolve,reject)=>{
        try{
            //Create socket 
            http = require('http').Server(app)
            io=socketio(http);
            //listen for events in socket
            http.listen(PORT, ()=>console.log('Socket listening on port: '+ PORT));
                
            //resolve io instance
            resolve(io);
        }catch(e)
        {
            reject(e);
        }
        

    })
   
}

module.exports={initConnection};
/*

app.post('/send-meesage',(req,res)=>{
    const uid=req.body.uid;
    io.to(users[uid]).emit('cloud-event-other','Cloud Server','I see you buddy');
})
app.post('/send-push',(req,res)=>{

    const {uid,title,content}=req.body;

    notifyUser(uid,title,content)
        .then(()=>res.status(201).send("Notification sent to "+uid))
        .catch((e)=>res.status(400).send(e))
})

const notifyUser=(uid,title,content)=>{
    return new Promise((resolve,reject)=>{
        try{
            io.to(users[uid]).emit('cloud-event-push',title,content);
            resolve(true)
        }catch(e)
        {
            reject(e);
        }
    })
    
}

*/