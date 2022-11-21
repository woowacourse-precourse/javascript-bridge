const { ERROR_MESSAGE } = require("./Constants");
const { COMMAND } = require("./Constants");

class CheckBridgeSizeException{
    #size
    constructor(size){
        this.checkInputBridgeSize(size);
        this.#size = size;
    }

    checkInputBridgeSize(size){
        this.checkBridgeSize(size);
        this.checkBridgeNum(size);
    }

    checkBridgeSize(size){
        if(size > 20 || size < 3){
            throw new Error(ERROR_MESSAGE.NOT_BETWEEN_SIZE);
        }
    }

    checkBridgeNum(size){
        if(isNaN(size)){
            throw new Error(ERROR_MESSAGE.IS_NOT_NUMBER);
        }
    }
}

class CheckUserMove{
    #SelectUpOrDown
    constructor(SelectUpOrDown){
        this.#SelectUpOrDown = SelectUpOrDown;
        this.CheckInputString(SelectUpOrDown);
    }

    CheckInputString(SelectUpOrDown){
        if(SelectUpOrDown !== COMMAND.BRIDGE_UP && SelectUpOrDown !== COMMAND.BRIDGE_DOWN){
            throw new Error(ERROR_MESSAGE.IS_NOT_GIVEN_MOVE_VALUE);
        }
    } 
}

class CheckWhetherGameRunning{
    #value
    constructor(value){
        this.#value = value;
        this.CheckInputValue(value);
    }
    CheckInputValue(value){
        if(value !== COMMAND.QUIT && value !== COMMAND.RESTART){
            throw new Error(ERROR_MESSAGE.IS_NOT_GIVEN_RUNNING_VALUE);
        }
    }
}

module.exports = {CheckBridgeSizeException , CheckUserMove, CheckWhetherGameRunning};