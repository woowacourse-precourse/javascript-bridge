const { SETTING, MESSAGE } = require("../constants/Constants");
const { Console } = require("@woowacourse/mission-utils");

const Validation = {

  checkBridgeSize(sizeInput){
    let check = /^[0-9]+$/; 
    if (!check.test(sizeInput)) {
      throw new Error(MESSAGE.BRIDGE_SIZE_NOT_NUMBER);
    }
    if(sizeInput<SETTING.BRIDGE_MIN || sizeInput>SETTING.BRIDGE_MAX){
      throw new Error(MESSAGE.BRIDGE_SIZE_OUT_OF_RANGE);
    }
  },

  checkMoving(movingInput){
    if (!(movingInput===SETTING.UP || movingInput===SETTING.DOWN)){
      throw new Error(MESSAGE.MOVING_NOT_VALID);
    }
  },

  checkOption(optionInput){
    if (!(optionInput===SETTING.QUIT || optionInput===SETTING.RETRY)){
      throw new Error(MESSAGE.OPTION_NOT_VALID);
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