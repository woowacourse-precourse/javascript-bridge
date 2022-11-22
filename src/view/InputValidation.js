const { Message } = require("./ViewMakers")
const { Console } = require("@woowacourse/mission-utils");

const Validation = {

  checkBridgeSize(sizeInput){
    let check = /^[0-9]+$/; 
    if (!check.test(sizeInput)) {
      throw new Error(Message.BRIDGE_SIZE_NOT_NUMBER);
    }
    if(sizeInput<3 || sizeInput>20){
      throw new Error(Message.BRIDGE_SIZE_OUT_OF_RANGE);
    }
  },

  checkMoving(movingInput){
    if (!(movingInput==='U' || movingInput==='D')){
      throw new Error(Message.MOVING_NOT_VALID);
    }
  },

  checkOption(optionInput){
    if (!(optionInput==='Q' || optionInput==='R')){
      throw new Error(Message.OPTION_NOT_VALID);
    }
  },

  validateBridgeSize(sizeInput){
    try{
      this.checkBridgeSize(sizeInput);
      return true;
    }catch(err){
      Console.print(err.message);
      return false;
    }
  },

  validateMoving(movingInput){
    try{
      this.checkMoving(movingInput);
      return true;
    }catch(err){
      Console.print(err.message);
      return false;
    }
  },

  validateOption(optionInput){
    try{
      this.checkOption(optionInput);
      return true;
    }catch(err){
      Console.print(err.message);
      return false;
    }
  }
  
}

module.exports = Validation;