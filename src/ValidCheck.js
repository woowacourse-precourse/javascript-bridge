const MissionUtils = require("@woowacourse/mission-utils");
const ValidCheck = {
  bridgeIsInRange(bridgeSize){
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
  }
};

module.exports = ValidCheck;
