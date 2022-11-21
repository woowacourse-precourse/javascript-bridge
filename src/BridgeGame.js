const { BridgeMaker, makeBridge } = require("./BridgeMaker");
/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  constructor() {
    this.num = 0;
    this.upList = [];
    this.downList = [];
  }
/**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(bridgeList, userUpOrDown) {
      if(userUpOrDown === 'U') {
        if(bridgeList[this.num] === 'U') {
        this.upList.push('O');
        } else {
          this.upList.push('X');
        }
        this.downList.push(' ');
      }
      else if(userUpOrDown === 'D') {
        if(bridgeList[this.num] === 'D') {
          this.downList.push('O');
        } else {
          this.downList.push('X');
        }
        this.upList.push(' ');
      }
    this.num += 1;
    return [this.upList, this.downList, this.num];
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {}
}
module.exports = BridgeGame;
