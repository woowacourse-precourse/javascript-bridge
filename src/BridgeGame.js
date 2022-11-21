const Bridge = require("./Bridge");

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  constructor(){
    this.upBridgeList = [];
    this.downBridgeList = [];
    this.count = 0;
  }
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(space) {
    const bridgeList = Bridge.getBridge();

    if(space === "U") this.upMove(bridgeList);
    if(space === "D") this.downMove(bridgeList);
  }

  upMove(bridgeList){
    if(bridgeList[this.count] === "U"){
      return (
        this.upBridgeList[count].push('O'),
        this.downBridgeList[count].push(' ')
      )
    }
    this.upBridgeList[count].push('X');
    this.downBridgeList[count].push(' ');
  }

  downMove(bridgeList){
    if(bridgeList[this.count] === "D"){
      return (
        this.upBridgeList[count].push(' '),
        this.downBridgeList[count].push('O')
      )
    }
    this.upBridgeList[count].push(' ');
    this.downBridgeList[count].push('X');

  }
  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {}
}

module.exports = BridgeGame;
