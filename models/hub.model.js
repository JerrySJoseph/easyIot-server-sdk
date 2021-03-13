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
        name:name,
        connStatus:connStatus,
        devices:devices,
        deviceCount:deviceCount,
        createdAt:createdAt,
        modifiedAt:modifiedAt,
        authToken:authToken,
        refToken:refToken,
        lastConnect:lastConnect,
        lastDisconnect:lastDisconnect,
        password:password   
    }
}

module.exports=buildHubProfile;
