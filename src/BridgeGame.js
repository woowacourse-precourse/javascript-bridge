const OutputView = require('./OutputView');

class BridgeGame {
  constructor(bridge) {
    this.answerSteps = bridge;
    this.bridgeSteps = [];
    this.gameCount = 1;
    this.gameStatus = '';
  }

  move() {
    const lastIdx = this.bridgeSteps.length - 1;
    if (
      this.isStepSame(this.answerSteps[lastIdx], this.bridgeSteps[lastIdx]) &&
      lastIdx === this.answerSteps.length - 1
    ) {
      return 'WIN';
    }
    if (this.isStepSame(this.answerSteps[lastIdx], this.bridgeSteps[lastIdx])) {
      return 'MOVE';
    }
    return 'FAIL';
  }

  isStepSame(answerStep, compareStep) {
    return answerStep === compareStep;
  }

  retry() {
    this.bridgeSteps = [];
    this.gameCount += 1;
  }

  win() {
    this.gameStatus = '성공';
    OutputView.printResult(
      this.answerSteps,
      this.bridgeSteps,
      this.gameStatus,
      this.gameCount
    );
  }

  lose() {
    this.gameStatus = '실패';
    OutputView.printResult(
      this.answerSteps,
      this.bridgeSteps,
      this.gameStatus,
      this.gameCount
    );
  }
}

module.exports = BridgeGame;
