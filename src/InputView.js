const MissionUtils = require("@woowacourse/mission-utils");
const { Console } = MissionUtils;
const {MESSAGE, ERROR} = require("./Constants.js");

const InputView = {
  readBridgeSize(callback) {
    Console.readLine(MESSAGE.PUT_SIZE, callback);
  },

  readMoving(callback) {
    Console.readLine(MESSAGE.PUT_MOVE, callback);
  },

  readGameCommand(callback) {
    Console.readLine(MESSAGE.PUT_COMMAND, callback);
  },

  bridgeSizeValidate(size){
    const isValidateNumber = this.numberValidate(size);
    const isValidateInteger = this.integerValidate(size);
    const isValidateScope = this.scopeValidate(size, 3, 20);
    const isValidate = (isValidateNumber && isValidateInteger && isValidateScope);
    if(!isValidate) 
      this.errorHandling(ERROR.SIZE_INPUT_ERROR);

    return isValidate;
  },

  movingValidate(move){
    if(move !== `U` && move !== `D`){
      this.errorHandling(ERROR.MOVE_INPUT_ERROR); 
      return false;
    }

    return true;
  },
  
  commandValidate(command){
    if(command !== `R` && command !== `Q`){
      this.errorHandling(ERROR.COMMAND_INPUT_ERROR);
      return false;
    }

    return true;
  },

  numberValidate(number){
    if(isNaN(number)) 
      return false;
    
    return true;
  },

  integerValidate(integer){
    if(!(integer % 1 === 0)) 
      return false;
    
    return true;
  },

  scopeValidate(number, min, max){
    if(number < min || number > max) 
      return false;

    return true;
  },
  
  errorHandling(message){
    try{
      throw new Error(message);
    }catch(error){
      Console.print(error);
    }
  }
}

module.exports = InputView;
