/**
 * 다리 건너기 게임을 관리하는 클래스
 */
const OutputView = require("./OutputView");

class BridgeGame {

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(bridgeAnswer, userInput) {
    if (bridgeAnswer == userInput){
      //OutputView.printMap(userInput);//사용자의 Input 기준으로 해야 X도 칠 수 있음. 
      console.log('Success!');
    }
    //this.retry();//값이 일치하지 않은 경우
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {}
}

module.exports = BridgeGame;
