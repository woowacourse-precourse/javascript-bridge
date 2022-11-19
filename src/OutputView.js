const { Console } = require('@woowacourse/mission-utils');
/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  upBridge: '[',
  downBridge: '[',
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(boolean, letter) {
    if (boolean && letter === 'U') return this.answerisTrueWithU(letter);
    if (boolean && letter === 'D') return this.answerisTrueWithP(letter);
    if (!boolean && letter === 'U') return this.answerisFalseWithU(letter);
    if (!boolean && letter === 'D') return this.answerisFalseWithP(letter);
  },

  answerisTrueWithU(letter) {
    if (letter === 'U' && this.upBridge === '[') {
      return this.firstTrueUpBridge();
    }
    if (letter === 'U' && this.upBridge !== '[') {
      return this.afterTrueUpBridge();
    }
  },

  firstTrueUpBridge() {
    this.upBridge = this.upBridge.concat(' O ]');
    this.downBridge = this.downBridge.concat('   ]');
    Console.print(this.upBridge + '\n' + this.downBridge);
  },

  afterTrueUpBridge() {
    this.upBridge = this.upBridge.slice(0, -1).concat('| O ]');
    this.downBridge = this.downBridge.slice(0, -1).concat('|   ]');
    Console.print(this.upBridge + '\n' + this.downBridge);
  },

  answerisTrueWithP(letter) {
    if (letter === 'D' && this.upBridge === '[') {
      return this.firstTrueDownBridge();
    }
    if (letter === 'D' && this.upBridge !== '[') {
      return this.afterTrueDownBridge();
    }
  },

  firstTrueDownBridge() {
    this.upBridge = this.upBridge.concat('   ]');
    this.downBridge = this.downBridge.concat(' O ]');
    Console.print(this.upBridge + '\n' + this.downBridge);
  },

  afterTrueDownBridge() {
    this.upBridge = this.upBridge.slice(0, -1).concat('|   ]');
    this.downBridge = this.downBridge.slice(0, -1).concat('| O ]');
    Console.print(this.upBridge + '\n' + this.downBridge);
  },

  answerisFalseWithU(letter) {
    if (letter === 'U' && this.upBridge === '[') {
      return this.firstFalseUpBridge();
    }
    if (letter === 'U' && this.upBridge !== '[') {
      return this.afterFalseUpBridge();
    }
  },

  firstFalseUpBridge() {
    this.upBridge = this.upBridge.concat(' X ]');
    this.downBridge = this.downBridge.concat('   ]');
    Console.print(this.upBridge + '\n' + this.downBridge);
  },

  afterFalseUpBridge() {
    this.upBridge = this.upBridge.slice(0, -1).concat('| X ]');
    this.downBridge = this.downBridge.slice(0, -1).concat('|   ]');
    Console.print(this.upBridge + '\n' + this.downBridge);
  },

  answerisFalseWithP(letter) {
    if (letter === 'D' && this.upBridge === '[') {
      return this.firstFalseDownBridge();
    }
    if (letter === 'D' && this.upBridge !== '[') {
      return this.afterFalseDownBridge();
    }
  },

  firstFalseDownBridge() {
    this.upBridge = this.upBridge.concat('   ]');
    this.downBridge = this.downBridge.concat(' X ]');
    Console.print(this.upBridge + '\n' + this.downBridge);
  },

  afterFalseDownBridge() {
    this.upBridge = this.upBridge.slice(0, -1).concat('|   ]');
    this.downBridge = this.downBridge.slice(0, -1).concat('| X ]');
    Console.print(this.upBridge + '\n' + this.downBridge);
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult() {},
};
module.exports = OutputView;
