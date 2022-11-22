const MissionUtils = require("@woowacourse/mission-utils");
const { Console } = MissionUtils;

const InputView = {
  readBridgeSize(callback) {
    Console.readLine(`다리의 길이를 입력해주세요.\n`, callback);
  },

  readMoving(callback) {
    Console.readLine(`이동할 칸을 선택해주세요. (위: U, 아래: D)\n`, callback);
  },

  readGameCommand(callback) {
    Console.readLine(`게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n`, callback);
  },

  bridgeSizeValidate(size){
    const isValidateNumber = this.numberValidate(size);
    const isValidateInteger = this.integerValidate(size);
    const isValidateScope = this.scopeValidate(size, 3, 20);
    const isValidate = (isValidateNumber && isValidateInteger && isValidateScope);
    if(!isValidate) 
      this.errorHandling(`[ERROR] 3~20범위 정수를 입력해주세요.`);

    return isValidate;
  },

  movingValidate(move){
    if(move !== `U` && move !== `D`){
      this.errorHandling(`[ERROR] U또는 D값을 입력해주세요.`); 
      return false;
    }

    return true;
  },
  
  commandValidate(command){
    if(command !== `R` && command !== `Q`){
      this.errorHandling(`[ERROR] R또는 Q값을 입력해주세요.`);
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
