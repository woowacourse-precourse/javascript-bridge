const MissionUtils = require('@woowacourse/mission-utils');

class BridgeGame {
  constructor() {
    this.rightBridge = [];
    this.copy = [];
    this.bridegeUp = [];
    this.bridegeDown = [];
    this.tryCount = 1;
    this.selectCount = 0;
  }

  bridgeMake(bridge) {
    this.rightBridge = [...bridge];
    this.copy = [...bridge];
  }
  move(answer) {
    answer = answer.toUpperCase();
    this.blankAdd();
    return this.checkAnswer(answer);
  }
  checkAnswer(answer, result = false) {
    if (this.copy[0] === answer) {
      answer === 'U'
        ? (this.bridegeUp.push('O'), this.bridegeDown.push(' '))
        : (this.bridegeUp.push(' '), this.bridegeDown.push('O'));
      this.copy.shift();
      result = true;
      this.selectCount++;
      return result;
    }
    this.worongAnswer(answer);
    return result;
  }
  worongAnswer(answer) {
    answer === 'U'
      ? (this.bridegeUp.push('X'), this.bridegeDown.push(' '))
      : (this.bridegeUp.push(' '), this.bridegeDown.push('X'));
  }
  blankAdd() {
    if (this.bridegeUp.length > 0) {
      this.bridegeUp.push('|'), this.bridegeDown.push('|');
    }
  }
  retry() {
    this.copy = [...this.rightBridge];
    this.bridegeUp = [];
    this.bridegeDown = [];
    this.tryCount++;
    this.selectCount = 0;
  }
  gameOver() {
    MissionUtils.Console.close();
  }
}

module.exports = BridgeGame;
