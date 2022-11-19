const { checkBridgeMove, printBridgeMoveError } = require('./lib/bridgeGameUtils');
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
    if (ask === 'R') {
      this.clean();
      this.#tryCount += 1;
      return true;
    }
    return false;
  }

  addUpDown(move, answer) {
    if (move === 'U') {
      this.#down.push(' ');
      this.addUp(move, answer);
    }
    if (move === 'D') {
      this.#up.push(' ');
      this.addDown(move, answer);
    }
  }

  addUp(move, answer) {
    if (answer[this.#route.length - 1] === move) {
      this.#up.push('O');
      return;
    }
    if (answer[this.#route.length - 1] !== move) {
      this.#up.push('X');
      return;
    }
  }

  addDown(move, answer) {
    if (answer[this.#route.length - 1] === move) {
      this.#down.push('O');
      return;
    }
    if (answer[this.#route.length - 1] !== move) {
      this.#down.push('X');
      return;
    }
  }

  checkX() {
    if (this.#up.includes('X') || this.#down.includes('X')) {
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
        return '성공';
      }
    }
    return '실패';
  }
}

module.exports = BridgeGame;
