const { checkBridgeMove, printBridgeMoveError } = require('./lib/bridgeGameUtils');
const {
  RETRY,
  FAIL,
  SUCCESS,
  DOWN,
  UP,
  SUCCESS_SHAPE,
  FAIL_SHAPE,
  BLANK,
} = require('./lib/constants');
/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #route = [];
  #tryCount = 1;
  #up = [];
  #down = [];
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(move, answer) {
    this.moveValidate(move);
    this.#route.push(move);
    this.addUpDown(move, answer);
  }

  moveValidate(move) {
    printBridgeMoveError(checkBridgeMove(move));
  }
  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry(ask) {
    if (ask === RETRY) {
      this.clean();
      this.#tryCount += 1;
      return true;
    }
    return false;
  }

  addUpDown(move, answer) {
    if (move === UP) {
      this.#down.push(BLANK);
      this.addUp(move, answer);
    }
    if (move === DOWN) {
      this.#up.push(BLANK);
      this.addDown(move, answer);
    }
  }

  addUp(move, answer) {
    if (answer[this.#route.length - 1] === move) {
      this.#up.push(SUCCESS_SHAPE);
      return;
    }
    if (answer[this.#route.length - 1] !== move) {
      this.#up.push(FAIL_SHAPE);
      return;
    }
  }

  addDown(move, answer) {
    if (answer[this.#route.length - 1] === move) {
      this.#down.push(SUCCESS_SHAPE);
      return;
    }
    if (answer[this.#route.length - 1] !== move) {
      this.#down.push(FAIL_SHAPE);
      return;
    }
  }

  checkX() {
    if (this.#up.includes(FAIL_SHAPE) || this.#down.includes(FAIL_SHAPE)) {
      return false;
    }
    return true;
  }

  returnUpDownArray() {
    let array = [];
    array.push(this.returnStringArray(this.#up));
    array.push(this.returnStringArray(this.#down));
    return array;
  }

  returnStringArray(arr) {
    let str = `[ ${arr.join(' , ')} ]`;
    str = str.replaceAll("'", ' ');
    str = str.replaceAll(',', '|');
    return str;
  }

  lengthCompare(answer) {
    if (answer.length !== this.#route.length) {
      return false;
    }
    return true;
  }

  clean() {
    this.#route = [];
    this.#up = [];
    this.#down = [];
  }

  returnUpDownTryCountArray(answer) {
    let array = [];
    array.push(this.returnStringArray(this.#up));
    array.push(this.returnStringArray(this.#down));
    array.push(this.returnSuccessFail(answer));
    array.push(this.#tryCount);
    return array;
  }

  returnSuccessFail(answer) {
    if (this.lengthCompare(answer)) {
      if (this.checkX()) {
        return SUCCESS;
      }
    }
    return FAIL;
  }
}

module.exports = BridgeGame;
