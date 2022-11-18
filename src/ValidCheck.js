const OutputView = require("./OutputView.js");
const MissionUtils = require("@woowacourse/mission-utils");
const ValidCheck = {
  BridgeSizeValidCheck(bridgeSize){
    this.IsInRange(bridgeSize);
    this.SizeIsNumber(bridgeSize);
  },
  IsInRange(bridgeSize){
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
  SizeIsNumber(bridgeSize){
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
