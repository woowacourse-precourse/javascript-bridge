const OutputView = require("./OutputView.js");
const MissionUtils = require("@woowacourse/mission-utils");
const ValidCheck = {
  bridgeSizeValidCheck(bridgeSize){
    this.sizeIsNumber(bridgeSize);
    this.isInRange(bridgeSize);
  },
  movingValidCheck(moving){
    this.isCorrectUpDown(moving);
    this.isOneLetter(moving);
  },
  gameCommandValidCheck(gameCommand){
    this.isCorrectRetryQuit(gameCommand);
  },
  isInRange(bridgeSize){
    if (bridgeSize<3 || bridgeSize>20) {
      try{
        throw new Error();
      }catch(e){
        OutputView.printErrorMessageAboutBridgeSize();
        return true;
      }
    }else{
      return false;
    }
  },
  sizeIsNumber(bridgeSize){
    const IS_NOT_NUMBER = /\D/g;
    if(IS_NOT_NUMBER.test(bridgeSize)){
      try{
        throw new Error();
      }catch(e){
        OutputView.printErrorMessageAboutBridgeSize();
        return true;
      }
    }else{
      return false;
    }
  },
  isCorrectUpDown(moving){
    const IS_UD = /[UD]/g;
    if(IS_UD.test(moving)==false){
      try{
        throw new Error();
      }catch(e){
        OutputView.printErrorMessageAboutMoving();
        return true;
      }
    }else{
      return false;
    }
  },
  isCorrectRetryQuit(gameCommand){
    const IS_RQ = /[RQ]/g;
    if(IS_RQ.test(gameCommand)==false){
      try{
        throw new Error();
      }catch(e){
        OutputView.printErrorMessageAboutGameCommand();
        return true;
      }
    }else{
      return false;
    }
  },
  isOneLetter(moving){
    if(moving.length!==1){
      try{
        throw new Error();
      }catch(e){
        OutputView.printErrorMessageAboutMoving();
        return true;
      }
    }else{
      return false;
    }
  }
};

module.exports = ValidCheck;
