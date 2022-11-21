const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const BridgeMaker = require('./BridgeMaker')
const { BRIDGE_MOVING } = require('./constant/InputMsg')

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  bridgeSize;
  trial = BRIDGE_MOVING.trial

  constructor(bridge, bridgeList) {
    this.bridge = bridge;
    this.bridgeList = bridgeList
  }

  move(direction) {
    const idx = this.bridgeList[0].length;
    if(direction === 'U') this.upMoving(direction,this.bridge[idx])
    if(direction === 'D') this.downMoving(direction,this.bridge[idx])
    console.log(this.bridge)
    return this.bridgeList
  }

  upMoving(direction, bridge) {
    if(direction === bridge) {
      this.bridgeList[0].push('O');
      this.bridgeList[1].push(' ');
      return
    }
    this.bridgeList[0].push('X');
    this.bridgeList[1].push(' ');
  }
  
  downMoving(direction, bridge) {
    if (direction === bridge) {
      this.bridgeList[1].push('O');
      this.bridgeList[0].push(' ');
      return
    }
    this.bridgeList[1].push('X');
    this.bridgeList[0].push(' ');
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  viewResult() {
    return [this.bridgeList, this.trial]
  }

  retry() {
    this.trial += 1
    this.bridgeList = [[], []]
  }
}

module.exports = BridgeGame;
