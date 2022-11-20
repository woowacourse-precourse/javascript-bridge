const MissionUtils = require("@woowacourse/mission-utils");
const App = require("./App");
const OutputView = require('./OutputView');
class BridgeGame {
  num;
  bridges =[];
  constructor(BridgeArray){
    this.num=0;
    this.bridges = BridgeArray;
    
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(input,turns) {
    if(input == this.bridges[turns]){
      OutputView.printMap();
      return true;
    }
    else{
      OutputView.printMap();
      return false;
    }
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry(input) {
    if(input =='Q'){ 
      printResult();
      return false;
    }
    else if(input =='R') return true;
  }
}

module.exports = BridgeGame;
