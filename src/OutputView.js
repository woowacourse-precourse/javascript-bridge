const MissionUtils = require('@woowacourse/mission-utils');

const command = require('./util/command');
const step = require('./util/step');

const OutputView = {
  printMessage(message) {
    MissionUtils.Console.print(message);
    return this;
  },

  printMap(answerSteps, inputSteps) {
    const upBridgeString = `${step.START}${this.makeBridgeString(
      answerSteps,
      inputSteps,
      command.UP
    )}${step.END}`;
    const downBridgeString = `${step.START}${this.makeBridgeString(
      answerSteps,
      inputSteps,
      command.DOWN
    )}${step.END}`;

    this.printMessage(upBridgeString);
    this.printMessage(downBridgeString);
  },

  makeBridgeString(answerSteps, inputSteps, direction) {
    const steps = [];
    for (let i = 0; i < inputSteps.length; i++) {
      if (direction !== inputSteps[i]) {
        steps.push(step.EMPTY);
        continue;
      }
      if (inputSteps[i] === answerSteps[i]) {
        steps.push(step.CORRECT);
        continue;
      }
      steps.push(step.WRONG);
    }
    return steps.join(step.LINE);
  },

  printResult(answerSteps, inputSteps, status, count) {
    this.printMessage('최종 게임 결과');
    this.printMap(answerSteps, inputSteps);
    this.printMessage(`게임 성공 여부: ${status}`);
    this.printMessage(`총 시도한 횟수: ${count}`);
  },
};

module.exports = OutputView;
