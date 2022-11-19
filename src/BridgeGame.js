const MissionUtils = require("@woowacourse/mission-utils");
/**
 * 다리 건너기 게임을 관리하는 클래스
 * InputView, OutputView 를 사용하지 않는다.
 */
class BridgeGame {
  constructor(){
    this.inputCount = 0;
    this.bridgeMap=[[],[]];
  }
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(input, bridge) {
    if(input === bridge[this.inputCount]){
      this.inputCount++;
      return 'O'
    }
    if(input !== bridge[this.inputCount]){
      this.inputCount++;
      return 'X'
    }
  }

  drawMap(input,moveResult){
    if(input === 'U') {
      this.bridgeMap[0].push(moveResult);
      this.bridgeMap[1].push(' ')
    }
    if(input === 'D') {
      this.bridgeMap[0].push(' ')
      this.bridgeMap[1].push(moveResult);
    }
    return this.bridgeMap;
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    this.inputCount = 0;
    this.bridgeMap = [[],[]];
  }
}

module.exports = BridgeGame;
