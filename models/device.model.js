//Method to create Device Profile
const buildDeviceProfile=({
    name,
    hubID,
    connStatus,
    deviceState,
    value,
    createdAt,
    modifiedAt    
})=>{
    return {
        name,
        hubID,
        connStatus,
        deviceState,
        value,
        createdAt,
        modifiedAt   
    }
}

module.exports=buildDeviceProfile;
