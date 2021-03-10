const deviceConnection=require('./connection/device-connection');

const users={};
let hubID;
const initEngine = (app,PORT)=>{
    return new Promise((resolve,reject)=>{
        deviceConnection.initConnection(app,PORT)
            .then((io)=>{
                registerEvents(io);
            })
    })
}

module.exports={initEngine}



function registerEvents(io){

//To listen to messages
io.on('connection', (socket)=>{

    let clientID=null;

    console.log("connected to socket "+ socket.id);
    socket.on("disconnect", ()=>{
    console.log("Disconnected")
        if(clientID!=null)
            users[clientID]=null;
        console.log(users)
    })
    socket.on('command',(cmd)=>{
        io.to(hubID).emit('command',cmd);
    });

    socket.on('client-handshake',(client,ack)=>{
        console.log('Client-handshake-recieved');
        client=JSON.parse(client);
        clientID=client.clientID;
        users[client.clientID]=socket.id;
        console.log("active users are:");
        console.log(users);
        ack('OK');
    })
    socket.on('hub-handshake',(hub,ack)=>{
        console.log('Hub-handshake-recieved :'+hub);
        hubID=socket.id;
        ack('OK');
    })

 console.log('user connected');
});
}
