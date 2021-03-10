class CacheStore{
    //properties
    keyArr=[];
    valArr=[];
    maxSize;

    constructor(maxSize)
    {
        this.maxSize=maxSize;
    }

    add(key,value) {
        this.keyArr.push(key);
        this.valArr.push(value);
    }
    getValuebyKey(key)
    {
        let index=this.keyArr.indexOf(key);
        if(index>-1)
            return this.valArr[index];
        return -1;
    }
}
module.exports=CacheStore;