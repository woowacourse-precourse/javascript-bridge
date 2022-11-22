const MissionUtils = require("@woowacourse/mission-utils");
const Console = MissionUtils.Console;
const OutputView = require("./OutputView");
const InputView = require("./InputView");
/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(bridge,step) {
    for(let idx=0; idx<step.length; idx++){
      if(bridge[idx]!=step[idx]){
        return false;
      }
    }
    return true;
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry(retry,attempt) {
    if(retry=="R"){
      InputView.readMoving(bridge,[],attempt+1);
    }else if(retry=="Q"){
      OutputView.printResult(false,attempt);
      Console.close();
    }
  }

  /**
   * 추가 - 끝까지 건너면 종료
   */
  finish(steps,bridge,attempt){
    if(steps.length!=bridge.length){
      InputView.readMoving(bridge,steps,attempt);
    }else{
      Console.print("최종 게임 결과");
      OutputView.printMap(bridge,steps);
      OutputView.printResult(true,attempt);
      Console.close();
    }
  }
}

module.exports = BridgeGame;
