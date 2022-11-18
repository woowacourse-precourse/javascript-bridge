const InputView = require("./InputView");
const MissionUtils = require("@woowacourse/mission-utils");
const BridgeMaker = require("./BridgeMaker");

class BridgeGame {
  bridge;
  progressCnt;
  isOkWay;
  finishGame;
  userWay;
  tryCnt;
  bridge;

  constructor(bridge) {
    console.log(bridge, bridge.length);
    this.bridge = bridge;
    this.progressCnt = 0;
    this.tryCnt = 0;
    this.isOkWay = false;
    this.finishGame = false;
    this.userWay = [];
    this.bridgeMap = {
      up: "[",
      down: "[",
    };
  }

  move(userSelectValue) {
    this.progressCnt += 1;
    this.checkCorrectWay(userSelectValue);
  }

  checkCorrectWay(userSelectValue) {
    if (userSelectValue == this.bridge[this.progressCnt - 1]) {
      this.isOkWay = true;
      this.checkFinishWay();
      return;
    }
    this.isOkWay = false;
  }

  checkFinishWay() {
    if (this.progressCnt == this.bridge.length) {
      this.finishGame = true;
    }
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {}
}

exports.BridgeGame = BridgeGame;
