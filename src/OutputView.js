const MissionUtils = require('@woowacourse/mission-utils');
const command = require('./util/command');
const step = require('./util/step');

/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
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
  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult() {},
};

module.exports = OutputView;
