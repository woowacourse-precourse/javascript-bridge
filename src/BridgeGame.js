const Constant = require('./Constant');
/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */

  #bridge = "";
  #bridgeLength = 0;
  #currentMovingBridge = [];
  #try = 1;

  setBridge(bridge) {
    this.#bridge = bridge;
  }

  setBridgeLength(length) {
    this.#bridgeLength = length;
  }

  getTry() {
    return this.#try;
  }

  getCurrentMovingBridge() {
    return this.#currentMovingBridge;
  }

  move(word) {
    if (this.#bridge[this.#currentMovingBridge.length] === word) {
      this.#currentMovingBridge.push({[word]: Constant.SUCCESS_ALPHABET});
      return [true, this.#currentMovingBridge];
    }
    this.#currentMovingBridge.push({[word]: Constant.FAIL_ALPHABET});
    return [false, this.#currentMovingBridge];
  }

  judgePlay(isMove) {
    if (!isMove) {
      return false;
    }

    if (this.#bridgeLength === this.#currentMovingBridge.length) {
      return true;
    }

    return 0;
  }

  seekCurrentBridge(userInputs) {
    const movingArray = [[], []];
    userInputs.forEach((userInput) => {
      this.pushBridgeArray(userInput, movingArray);
    });
    return movingArray;
  }

  pushBridgeArray(userInputObj, movingArray) {
    const userInput = Object.keys(userInputObj)[Constant.FIRST_INDEX];

    if (userInput === Constant.UPPER_ALPHABET) {
      this.pushMoving([0, 1], movingArray, userInputObj[userInput]);
    }

    if (userInput === Constant.LOWER_ALPHABET) {
      this.pushMoving([1, 0], movingArray, userInputObj[userInput]);
    }
  }

  pushMoving(numbers, movingArray, symbol) {
    const [number1, number2] = numbers;
    movingArray[number1].push(` ${symbol} `);
    movingArray[number2].push("   ");
  }

  judgeState() {
    const moveCount = this.#currentMovingBridge.filter((move) => move[Object.keys(move)[0]] === 'O').length;
    if(moveCount === this.#bridgeLength) {
      return Constant.SUCCESS_TEXT;
    }
    return Constant.FAIL_TEXT;
  }
  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
   retry(inputMoving) {
    this.#currentMovingBridge = [];
    this.#try += 1;
    inputMoving();
  }
}

module.exports = BridgeGame;
