const BridgeMaker = require("./BridgeMaker");
const Bridge = require("./Bridge");
const InputView = require("./InputView");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const OutputView = require("./OutputView");
const { Console } = require("@woowacourse/mission-utils");
/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #attemp = 1;
  #stage = 0;
  #isSuccess = "실패";

  gameStart() {
    InputView.readBridgeSize(this.inputBridgeSize.bind(this));
  }

  inputBridgeSize(input) {
    try {
      this.validateBridgeSize(input);
      this.getBridge(input);
    } catch (e) {
      Console.print(e.message);
      this.gameStart();
    }
  }

  validateBridgeSize(input) {
    if (isNaN(input) || input < 3 || input > 20) {
      let err = new Error("InputError : BridgeSize ");
      err.message = "[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.";
      throw err;
    }
  }

  getBridge(size) {
    const bridge = BridgeMaker.makeBridge(
      size,
      BridgeRandomNumberGenerator.generate
    );
    this.bridge = new Bridge(bridge);
    this.move();
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move() {
    InputView.readMoving(this.movingInput.bind(this));
  }

  movingInput(input) {
    try {
      this.validatePlayerMove(input);
      this.moveStart(input);
    } catch (e) {
      Console.print(e.message);
      this.move();
    }
  }

  moveStart(moveCommand) {
    const [upBridge, downBridge, gameLife] = this.bridge.move(
      moveCommand,
      this.#stage++
    );
    OutputView.printMap(upBridge, downBridge);
    return this.isOver(gameLife);
  }

  validatePlayerMove(input) {
    if (input !== "U" && input !== "D") {
      let err = new Error("InputError : PlayerMove ");
      err.message = "[ERROR] (위: U, 아래: D) 를 입력해주세요.";
      throw err;
    }
  }

  isOver(gameLife) {
    if (this.bridge.isFinal(this.#stage)) {
      if (gameLife) {
        this.changeSuceese();
        return this.endGame();
      }
      return this.isRetry();
    }
    gameLife ? this.move() : this.isRetry();
  }

  changeSuceese() {
    return (this.#isSuccess = "성공");
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry(gameCommand) {
    if (gameCommand === "R") {
      this.stageReset();
      this.bridge.setRetry();
      this.addAttemp();
      return this.move();
    }
    return this.endGame();
  }

  isRetry() {
    InputView.readGameCommand(this.inputGameCommand.bind(this));
  }

  inputGameCommand(input) {
    try {
      this.validateGameCommand(input);
      this.retry(input);
    } catch (e) {
      Console.print(e.message);
      this.isRetry();
    }
  }
  validateGameCommand(input) {
    if (input !== "R" && input !== "Q") {
      let err = new Error("InputError : gameCommand ");
      err.message = "[ERROR] (재시도: R, 종료: Q) 를 입력해주세요.";
      throw err;
    }
  }

  addAttemp() {
    this.#attemp++;
  }

  stageReset() {
    this.#stage = 0;
  }

  endGame() {
    const [upBridge, downBridge] = this.bridge.getResult();
    Console.print("\n최종 게임 결과");
    OutputView.printMap(upBridge, downBridge);
    OutputView.printResult(this.#isSuccess, this.#attemp);
  }
}

module.exports = BridgeGame;
