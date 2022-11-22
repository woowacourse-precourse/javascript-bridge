const MissionUtils = require("@woowacourse/mission-utils");
const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const { checkValidMove, checkValidEnd } = require("./CheckException");
const { readMoving, readGameCommand } = require("./InputView");
const { printMap, printResult, announceEnd } = require("./OutputView");

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

        const lastMovingIndex = this.userChoice.length - 1;

        if (move !== this.bridgeForm[lastMovingIndex]) {
          this.retry(); //틀린 경우
        }
        if (this.bridgeForm.length == this.userChoice.length) {
          this.quitGame(); //다맞은 경우
        }

        this.move();
      } catch (err) {
        this.print(err);
      }
    });
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    readGameCommand((command) => {
      try {
        checkValidEnd(command);

        if (command == "R") {
          this.move();
          this.userChoice += 1;
        }
        if (command == "Q") {
          this.quitGame();
        }
      } catch (err) {
        this.print(err);
      }
    });
  }

  quitGame() {
    printResult();
    announceEnd(true, this.tryCount);
  }
}

module.exports = BridgeGame;
