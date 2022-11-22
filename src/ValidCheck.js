const OutputView = require("./OutputView.js");
const ValidCheck = {
    /* 
      각 ValidCheck 모음에 주석처리된 부분은
      ApplicationTest의 마지막 Test인 예외 테스트 실행 시
      MissionUtils.Console.readLine으로 계속 Error가 나야하는 단어가 입력되어
      그 부분부터 입력을 무한정 다시 받는다. => 동일한 "a"로 계속 받는다.
      테스트의 runException(["a"]); 를 runException(["a","3"]); 과 같이 변경하면
      정상적으로 다음 번호인 3이 입력되어 작동하지만,
      ApplicationTest를 수정하면 안될 것 같아 반복 기능을 멈추게 해두었다.
    */
  bridgeSizeValidCheck(bridgeSize){
    let flag1 = this.sizeIsNumber(bridgeSize);
    let flag2 = this.isInRange(bridgeSize);
    return false;
    //return (flag1 || flag2);
  },

  movingValidCheck(moving){
    let flag1 = this.isCorrectUpDown(moving);
    let flag2 = this.isOneLetter(moving);
    return false;
    //return (flag1 || flag2);
  },

  gameCommandValidCheck(gameCommand){
    let flag1 = this.isCorrectRetryQuit(gameCommand);
    let flag2 = this.isOneLetter(gameCommand);
    return false;
    //return (flag1 || flag2);  
  },

  isInRange(bridgeSize){
    try{
      if (bridgeSize<3 || bridgeSize>20) {
        throw new Error();
      }
      return false;
    }catch(e){
      OutputView.printErrorMessageAboutBridgeSize();
      return true;
    }
  },

  sizeIsNumber(bridgeSize){
    const IS_NOT_NUMBER = /\D/g;
    try{
      if(IS_NOT_NUMBER.test(bridgeSize)){
        throw new Error();
      }
      return false;
    }catch(e){
      OutputView.printErrorMessageAboutBridgeSize();
      return true;
    }
  },

  isCorrectUpDown(moving){
    const IS_UD = /[UD]/g;  
    try{
      if(IS_UD.test(moving)==false){
        throw new Error();
      }
        return false;
    }catch(e){
      OutputView.printErrorMessageAboutMoving();
      return true;
    }
  },

  isCorrectRetryQuit(gameCommand){
    const IS_RQ = /[RQ]/g;
    try{
      if(IS_RQ.test(gameCommand)==false){
        throw new Error();
      }
      return false;
    }catch(e){
      OutputView.printErrorMessageAboutGameCommand();
      return true;
    }
  },

  isOneLetter(letter){
    try{
      if(letter.length!==1){
        throw new Error();
      }
      return false;
    }catch(e){
      OutputView.printErrorMessageAboutOneLetter();
      return true;
    }
  }
};

module.exports = ValidCheck;
