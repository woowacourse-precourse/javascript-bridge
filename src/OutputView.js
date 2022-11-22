const { Console } = require('@woowacourse/mission-utils');
const { BRIDGE, OUTPUT_TEXT } = require('./Constant');
/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  discernBridge(boolean, letter, count) {
    if (count === 0) {
      this.upBridge = BRIDGE.INITAIL_UP;
      this.downBridge = BRIDGE.INITAIL_DOWN;
      return this.printFirstMap(boolean, letter);
    }
    if (count !== 0) return this.printAfterMap(boolean, letter);
  },
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printFirstMap(boolean, letter) {
    if (boolean && letter === 'U') this.firstTrueUpBridge();
    if (boolean && letter === 'D') this.firstTrueDownBridge();
    if (!boolean && letter === 'U') this.firstFalseUpBridge();
    if (!boolean && letter === 'D') this.firstFalseDownBridge();
    return Console.print(this.upBridge + '\n' + this.downBridge);
  },

  printAfterMap(boolean, letter) {
    if (boolean && letter === 'U') this.afterTrueUpBridge();
    if (boolean && letter === 'D') this.afterTrueDownBridge();
    if (!boolean && letter === 'U') this.afterFalseUpBridge();
    if (!boolean && letter === 'D') this.afterFalseDownBridge();
    return Console.print(this.upBridge + '\n' + this.downBridge);
  },

  firstTrueUpBridge() {
    this.upBridge = this.upBridge.concat(' O ]');
    this.downBridge = this.downBridge.concat('   ]');
  },

  afterTrueUpBridge() {
    this.upBridge = this.upBridge.slice(0, -1).concat('| O ]');
    this.downBridge = this.downBridge.slice(0, -1).concat('|   ]');
  },

  firstTrueDownBridge() {
    this.upBridge = this.upBridge.concat('   ]');
    this.downBridge = this.downBridge.concat(' O ]');
  },

  afterTrueDownBridge() {
    this.upBridge = this.upBridge.slice(0, -1).concat('|   ]');
    this.downBridge = this.downBridge.slice(0, -1).concat('| O ]');
  },

  firstFalseUpBridge() {
    this.upBridge = this.upBridge.concat(' X ]');
    this.downBridge = this.downBridge.concat('   ]');
  },

  afterFalseUpBridge() {
    this.upBridge = this.upBridge.slice(0, -1).concat('| X ]');
    this.downBridge = this.downBridge.slice(0, -1).concat('|   ]');
  },

  firstFalseDownBridge() {
    this.upBridge = this.upBridge.concat('   ]');
    this.downBridge = this.downBridge.concat(' X ]');
  },

  afterFalseDownBridge() {
    this.upBridge = this.upBridge.slice(0, -1).concat('|   ]');
    this.downBridge = this.downBridge.slice(0, -1).concat('| X ]');
  },

  resetOutputBridge() {
    this.upBridge = BRIDGE.INITAIL_UP;
    this.downBridge = BRIDGE.INITAIL_DOWN;
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult() {
    Console.print(OUTPUT_TEXT.GAME_RESULT);
    Console.print(this.upBridge + '\n' + this.downBridge);
  },

  printTotalResult(answerisRight, roundCount) {
    if (answerisRight) {
      Console.print(OUTPUT_TEXT.SUCCESS);
    }
    if (!answerisRight) {
      Console.print(OUTPUT_TEXT.FAIL);
    }
    Console.print(OUTPUT_TEXT.TRY_COUNT + roundCount);
  },
};
module.exports = OutputView;
