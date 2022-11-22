const {Message} = require("./ViewMakers")

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
  }
  
}

module.exports = Validation;