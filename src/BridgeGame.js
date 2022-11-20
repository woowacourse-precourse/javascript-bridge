/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(input, count, i, bridge, bridgeMap,tryCount) {
    const INPUTVIEW = require("../src/Inputview");
    const OUTPUTVIEW = require("../src/Outputview");
    const MISSIONUTILS = require("@woowacourse/mission-utils");
    
    if(i==count){
      if (bridge[i] == input){
        return "Success";
      }
      else{
        if (i == 0){
          return "PrintFirstX";
        }
        else{
          return "PrintX";
        }
      }
    }
    else{
      if (bridge[i] == input){
          if (i == 0){
            return "PrintFirstO";
          }
          else{
            return "PrintO"
          }
      }    
      else{
        if (i == 0){
          return "PrintFirstX";
        }
        else{
          return "PrintX";
        }
      }
    }
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
   retry(input, count, bridge, bridgeMap, tryCount) {
    const INPUTVIEW = require("../src/Inputview");
    const OUTPUTVIEW = require("../src/Outputview");
    const MISSIONUTILS = require("@woowacourse/mission-utils");
    if (input == 'R'){
      INPUTVIEW.readMoving(count, 0, bridge, "" ,tryCount+1);
    }
    else{
      OUTPUTVIEW.printResult(bridgeMap, "실패", tryCount);
      MISSIONUTILS.Console.close();
      return;
    }
  }
}

module.exports = BridgeGame;
