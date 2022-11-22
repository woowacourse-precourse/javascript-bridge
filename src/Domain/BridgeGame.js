const { BRIDGE } = require('../Constant');

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #count;

  constructor(count) {
    this.#count = count;
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(answerArr, inputLetter) {
    this.answerArr = answerArr;
    return this.isMoveCorrect(inputLetter);
  }

  isMoveCorrect(inputLetter) {
    if (inputLetter === this.answerArr[this.#count]) {
      return this.moveisTrue();
    }
    if (inputLetter !== this.answerArr[this.#count]) {
      return this.moveisFalse();
    }
  }

  moveisTrue() {
    this.#count++;
    this.boolean = true;
    return true;
  }

  moveisFalse() {
    this.#count++;
    this.boolean = false;
    return false;
  }

  discernBridge(letter, count) {
    if (count === 0) {
      this.upBridge = BRIDGE.INITAIL_UP;
      this.downBridge = BRIDGE.INITAIL_DOWN;
      return this.printFirstMap(this.boolean, letter);
    }
    if (count !== 0) {
      return this.printAfterMap(this.boolean, letter);
    }
  }

  printFirstMap(boolean, letter) {
    if (boolean && letter === 'U') this.firstTrueUpBridge();
    if (boolean && letter === 'D') this.firstTrueDownBridge();
    if (!boolean && letter === 'U') this.firstFalseUpBridge();
    if (!boolean && letter === 'D') this.firstFalseDownBridge();
    return this.upBridge + '\n' + this.downBridge;
  }

  printAfterMap(boolean, letter) {
    if (boolean && letter === 'U') this.afterTrueUpBridge();
    if (boolean && letter === 'D') this.afterTrueDownBridge();
    if (!boolean && letter === 'U') this.afterFalseUpBridge();
    if (!boolean && letter === 'D') this.afterFalseDownBridge();
    return this.upBridge + '\n' + this.downBridge;
  }

  firstTrueUpBridge() {
    this.upBridge = this.upBridge.concat(' O ]');
    this.downBridge = this.downBridge.concat('   ]');
  }

  afterTrueUpBridge() {
    this.upBridge = this.upBridge.slice(0, -1).concat('| O ]');
    this.downBridge = this.downBridge.slice(0, -1).concat('|   ]');
  }

  firstTrueDownBridge() {
    this.upBridge = this.upBridge.concat('   ]');
    this.downBridge = this.downBridge.concat(' O ]');
  }

  afterTrueDownBridge() {
    this.upBridge = this.upBridge.slice(0, -1).concat('|   ]');
    this.downBridge = this.downBridge.slice(0, -1).concat('| O ]');
  }

  firstFalseUpBridge() {
    this.upBridge = this.upBridge.concat(' X ]');
    this.downBridge = this.downBridge.concat('   ]');
  }

  afterFalseUpBridge() {
    this.upBridge = this.upBridge.slice(0, -1).concat('| X ]');
    this.downBridge = this.downBridge.slice(0, -1).concat('|   ]');
  }

  firstFalseDownBridge() {
    this.upBridge = this.upBridge.concat('   ]');
    this.downBridge = this.downBridge.concat(' X ]');
  }

  afterFalseDownBridge() {
    this.upBridge = this.upBridge.slice(0, -1).concat('|   ]');
    this.downBridge = this.downBridge.slice(0, -1).concat('| X ]');
  }

  result() {
    return this.upBridge + '\n' + this.downBridge;
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    this.#count = 0;
    this.upBridge = BRIDGE.INITAIL_UP;
    this.downBridge = BRIDGE.INITAIL_DOWN;
  }
}

module.exports = BridgeGame;
