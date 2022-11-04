import Asset from "../Asset/Asset";

class Picture extends Asset {
    width: number = 0;
    height: number = 0;
    constructor(data: any){
        super(data)
        if(typeof(data.width)==='undefined' || typeof(data.height)==='undefined'){
            return
        }
        this.width = data.width;
        this.height = data.height;
    }
    canBeDownloaded():boolean{
        if(this.width>1999 && this.height>1999){
            return true
        }
        return false
    }
}
export default Picture