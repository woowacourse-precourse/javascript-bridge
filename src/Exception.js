class CheckBridgeSizeException{
    #size
    constructor(size){
        this.validate(size);
        this.#size = size;
    }

    validate(size){
        this.checkBridgeSize(size);
    }

    checkBridgeSize(size){
        if(size > 20 || size < 3){
            throw new Error("[ERROR] 다리의 길이는 3초과 20미만이여야 합니다.");
        }
    }
}