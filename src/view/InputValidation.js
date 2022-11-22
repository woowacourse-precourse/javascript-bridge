const { GameSetting, Message } = require("../constants/Constants");
const { Console } = require("@woowacourse/mission-utils");

const Validation = {

  checkBridgeSize(sizeInput){
    let check = /^[0-9]+$/; 
    if (!check.test(sizeInput)) {
      throw new Error(Message.BRIDGE_SIZE_NOT_NUMBER);
    }
    if(sizeInput<GameSetting.BRIDGE_MIN || sizeInput>GameSetting.BRIDGE_MAX){
      throw new Error(Message.BRIDGE_SIZE_OUT_OF_RANGE);
    }
  },

  checkMoving(movingInput){
    if (!(movingInput===GameSetting.UP || movingInput===GameSetting.DOWN)){
      throw new Error(Message.MOVING_NOT_VALID);
    }
  },

  checkOption(optionInput){
    if (!(optionInput===GameSetting.QUIT || optionInput===GameSetting.RETRY)){
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