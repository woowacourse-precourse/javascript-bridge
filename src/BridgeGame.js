const MissionUtils = require("@woowacourse/mission-utils");
const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const { checkValidMove } = require("./CheckException");
const { readMoving } = require("./InputView");
const { printMap } = require("./OutputView");

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  bridgeForm;
  tryCount;
  userChoice;

  constructor(length) {
    this.bridgeForm = BridgeMaker.makeBridge(
      length,
      BridgeRandomNumberGenerator.generate
    );

    this.tryCount = 1;
    this.userChoice = [];
  }

  print(message) {
    MissionUtils.Console.print(message);
    MissionUtils.Console.close();
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move() {
    readMoving((move) => {
      try {
        checkValidMove(move);
        this.userChoice.push(move);

        printMap(this.bridgeForm, this.userChoice);
      } catch (err) {
        this.print(err);
      }
    });
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {}
}

module.exports = BridgeGame;
