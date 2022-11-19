class CheckBridgeSizeException{
    #size
    constructor(size){
        this.validate(size);
        this.#size = size;
    }

    validate(size){
        this.checkBridgeSize(size);
    }
}