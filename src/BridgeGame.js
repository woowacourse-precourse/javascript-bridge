/**
 * 다리 건너기 게임을 관리하는 클래스
 */
const OutputView = require("./OutputView");
const InputView = require("./InputView");
const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const MissionUtils = require("@woowacourse/mission-utils");
const ErrorMessages = require("./ErrorMessages");

class BridgeGame {
  constructor() {
    this.bridge = [];
    this.bridgeResult = [[], []];
    this.size = 0;
    this.moving = "";
    this.count = 1;
    this.command = "";
    this.resultMessage = "성공";
  }

  play() {
    OutputView.startSentence();
    OutputView.lengthBridgeSentence();
    this.bridgeSize();
    this.createBridge();
    this.move();
    this.retry();
    this.result();
  }

  bridgeSize() {
    this.size = InputView.readBridgeSize();
    try {
      if (this.size < 3 || this.size > 20 || isNaN(this.size))
        throw ErrorMessages.numberSize;
    } catch (err) {
      MissionUtils.Console.print(err);
      this.size = InputView.readBridgeSize();
    }
  }

  createBridge() {
    this.bridge = BridgeMaker.makeBridge(
      this.size,
      BridgeRandomNumberGenerator.generate
    );
  }
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move() {
    for (let i = 0; i < this.size; i++) {
      this.readMove();
      this.pushXOrO(i);
      this.blankPush();
      OutputView.printMap(this.bridgeResult);
      if (this.bridgeResult[0][i] === "X" || this.bridgeResult[1][i] === "X")
        break;
    }
  }

  readMove() {
    OutputView.pickMoveSentence();
    this.moving = InputView.readMoving();
    try {
      if (this.moving !== "U" && this.moving !== "D") throw ErrorMessages.move;
    } catch (err) {
      MissionUtils.Console.print(err);
      this.moving = InputView.readMoving();
    }
  }

  pushXOrO(i) {
    if (this.moving === "U") this.bridgeResult[0].push(this.returnXOrO(i));
    if (this.moving === "D") this.bridgeResult[1].push(this.returnXOrO(i));
  }

  returnXOrO(i) {
    if (this.moving === this.bridge[i]) return "O";
    else return "X";
  }

  blankPush() {
    if (this.bridgeResult[0].length > this.bridgeResult[1].length) {
      this.bridgeResult[1].push(" ");
    }
    if (this.bridgeResult[0].length < this.bridgeResult[1].length) {
      this.bridgeResult[0].push(" ");
    }
  }
  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    if (
      this.bridgeResult[0].includes("X") ||
      this.bridgeResult[1].includes("X")
    ) {
      this.readCommand();
      if (this.command === "R") {
        this.bridgeResult = [[], []];
        this.count++;
        this.move();
      } else this.resultMessage = "실패";
    }
  }

  readCommand() {
    OutputView.retrySentence();
    this.command = InputView.readGameCommand();
    try {
      if (this.command !== "R" && this.command !== "Q")
        throw ErrorMessages.command;
    } catch (err) {
      MissionUtils.Console.print(err);
      this.command = InputView.readGameCommand();
    }
  }

  result() {
    OutputView.printResult(this.bridgeResult, this.count, this.resultMessage);
  }
}

module.exports = BridgeGame;
