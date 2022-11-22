const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const {
  INFO_MESSAGE,
  INPUT_MESSAGE,
  STATE_CONSTANT,
  RESULT_MESSAGE,
  ERROR_MESSAGE,
} = require("./Constants");
const InputView = require("./InputView");
const OutputView = require("./OutputView");
const { printMessage } = require("./OutputView");
const { InputValidator } = require("./utils/InputValidation");

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridgeSize;

  #userBridge = [];

  #computedBridge = [];

  #bridgeViewTop = [];
  #bridgeViewBottom = [];

  #gameResult;
  #gametry = 1;

  gameStart() {
    printMessage(INFO_MESSAGE.start);
    InputView.readBridgeSize(INPUT_MESSAGE.bridgeLength, (input) => {
      // InputValidator.bridgeSizeValidator(input);

      // try {
      //   InputValidator.bridgeSizeValidator(input);
      // } catch (err) {
      //   this.gameStart();
      // }

      this.#bridgeSize = parseInt(input);
      this.getInput(input);
    });
  }

  getInput(input) {
    const bridge = BridgeMaker.makeBridge(input, BridgeRandomNumberGenerator);

    this.#computedBridge = bridge;
    this.userMoving();
  }

  userMoving() {
    InputView.readMoving(
      `${INPUT_MESSAGE.selectNextPosition} ${INPUT_MESSAGE.UpDown}`,
      (input) => {
        // try {
        //   InputValidator.userMoveValidator(input);
        // } catch (err) {
        //   this.userMoving();
        // }

        this.move(input);
      }
    );
  }

  move(input) {
    this.makeUserBridge(input);
  }

  makeUserBridge(newState) {
    this.#userBridge.push(newState);

    let userCanGo = false;
    if (
      this.#userBridge[this.#userBridge.length - 1] ===
      this.#computedBridge[this.#userBridge.length - 1]
    ) {
      if (newState === STATE_CONSTANT.up) {
        this.drawBridge(this.#bridgeViewTop, STATE_CONSTANT.canMovePlace);
        this.drawBridge(this.#bridgeViewBottom, STATE_CONSTANT.emptyPlace);
      } else {
        this.drawBridge(this.#bridgeViewTop, STATE_CONSTANT.emptyPlace);
        this.drawBridge(this.#bridgeViewBottom, STATE_CONSTANT.canMovePlace);
      }
      userCanGo = true;
    } else {
      if (newState === STATE_CONSTANT.up) {
        this.drawBridge(this.#bridgeViewTop, STATE_CONSTANT.cantMovePlace);
        this.drawBridge(this.#bridgeViewBottom, STATE_CONSTANT.emptyPlace);
      } else {
        this.drawBridge(this.#bridgeViewTop, STATE_CONSTANT.emptyPlace);
        this.drawBridge(this.#bridgeViewBottom, STATE_CONSTANT.cantMovePlace);
      }
    }
    OutputView.makeMap({
      bridgeTop: this.#bridgeViewTop,
      bridgeBottom: this.#bridgeViewBottom,
    });
    this.nextTurn(userCanGo);
  }

  drawBridge(targetBridge, pushState) {
    targetBridge.push(pushState);
  }

  nextTurn(userCanGo) {
    this.#gameResult = !userCanGo
      ? RESULT_MESSAGE.isFail
      : RESULT_MESSAGE.isSuccess;

    if (userCanGo && !this.isCrossAllBridge()) {
      this.userMoving();
    } else if (this.isCrossAllBridge()) {
      this.end();
    } else if (!userCanGo) {
      this.retryOrEnd();
    }
  }

  isCrossAllBridge() {
    return this.#bridgeSize === this.#userBridge.length ? true : false;
  }

  retryOrEnd() {
    InputView.readGameCommand(
      `${INPUT_MESSAGE.retryOrEnd} ${INPUT_MESSAGE.retryEnd}`,
      (input) => {
        // try {
        //   InputValidator.retryOrEndValidator(input);
        // } catch (err) {
        //   throw new Error(ERROR_MESSAGE.betweenRange);

        //   this.retryOrEnd();
        // }

        input === STATE_CONSTANT.retry ? this.retry() : this.end();
      }
    );
  }

  retry() {
    this.#gametry += 1;
    this.resetUserBridges();
    this.userMoving();
  }
  end() {
    OutputView.printMessage(RESULT_MESSAGE.resultMessage);
    OutputView.makeMap({
      bridgeTop: this.#bridgeViewTop,
      bridgeBottom: this.#bridgeViewBottom,
    });
    OutputView.printResult({
      gameResult: this.#gameResult,
      gametry: this.#gametry,
    });
  }

  resetUserBridges() {
    this.#userBridge = [];
    this.#bridgeViewTop = [];
    this.#bridgeViewBottom = [];
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
}

module.exports = BridgeGame;
