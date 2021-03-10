//Method to create Device Profile
const buildHubProfile=(
    name,
    connStatus,
    devices,
    deviceCount,
    createdAt,
    modifiedAt,
    authToken,
    refToken,
    lastConnect,
    lastDisconnect,
    password   
)=>{
    return {
        name,
        connStatus,
        devices,
        deviceCount,
        createdAt,
        modifiedAt,
        authToken,
        refToken,
        lastConnect,
        lastDisconnect,
        password   
    }
}

module.exports=buildHubProfile;
