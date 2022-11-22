const MissionUtils = require("@woowacourse/mission-utils");
const { Console } = MissionUtils;

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(callback) {
    Console.readLine(`다리의 길이를 입력해주세요.\n`, callback);
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(callback) {
    Console.readLine(`이동할 칸을 선택해주세요. (위: U, 아래: D)\n`, callback);
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(callback) {
    Console.readLine(`게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n`, callback);
  },

  bridgeSizeValidate(size){
    const isValidateNumber = this.numberValidate(size);
    const isValidateInteger = this.integerValidate(size);
    const isValidateScope = this.scopeValidate(size, 3, 20);
    const isValidate = (isValidateNumber && isValidateInteger && isValidateScope);

    if(!isValidate) this.errorHandling(`[ERROR] 3~20범위 정수를 입력해주세요.`);

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
    if(isNaN(number)){
      return false;
    }
    
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
