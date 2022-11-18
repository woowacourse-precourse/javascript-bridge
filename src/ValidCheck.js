const OutputView = require("./OutputView.js");
const MissionUtils = require("@woowacourse/mission-utils");
const ValidCheck = {
  bridgeSizeValidCheck(bridgeSize){
    this.isInRange(bridgeSize);
    this.sizeIsNumber(bridgeSize);
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
  }
};

module.exports = ValidCheck;
