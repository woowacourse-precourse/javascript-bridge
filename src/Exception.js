class CheckBridgeSizeException{
    #size
    constructor(size){
        this.validate(size);
        this.#size = size;
    }

    validate(size){
        this.checkBridgeSize(size);
        this.checkBridgeSize(size);
    }

    checkBridgeSize(size){
        if(size > 20 || size < 3){
            throw new Error("[ERROR] 다리의 길이는 3초과 20미만이여야 합니다.");
        }
    }

    checkBridgeNum(size){
        if(isNaN(size)){
            throw new Error("[ERROR] 숫자를 입력해주세요.");
        }
    }
}

class CheckUserMove{
    #SelectUpOrDown
    constructor(SelectUpOrDown){
        this.#SelectUpOrDown = SelectUpOrDown;
        this.validate(SelectUpOrDown);
    }

    validate(SelectUpOrDown){
        this.CheckInputString(SelectUpOrDown);
    }

    CheckInputString(SelectUpOrDown){
        if(SelectUpOrDown !== "U" || SelectUpOrDown !== "D"){
            throw new Error("[ERROR] U(위) 또는 D(아래)을 입력해주세요.");
        }
    } 
}

class CheckWhetherGameRunning{
    #value
    constructor(value){
        this.#value = value;
        validate(value);
    }

    validate(value){

    }
}