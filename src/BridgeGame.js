const MissionUtils = require("@woowacourse/mission-utils");
const InputView = require("./InputView");
const Script = require("./Script");


class BridgeGame {
  bridge;
  movingDirection;
  play() {
    MissionUtils.Console.print(`${Script.STARTSCRIPT}\n`);
    this.input();

  }
  
  input() {
    InputView.readBridgeSize()
      .then((bridgeData) => {
        this.bridge = bridgeData
        this.move();
      });
  }


  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move() {
    InputView.readMoving()
      .then((movingDirectionData) => this.movingDirection = movingDirectionData);
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {}
}

module.exports = BridgeGame;
