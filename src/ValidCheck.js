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
        MissionUtils.Console.print("[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.");
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
        MissionUtils.Console.print("[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.");
        return true;
      }
    }else{
      return false;
    }
  }
};

module.exports = ValidCheck;
