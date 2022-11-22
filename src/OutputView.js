const { Console } = require('@woowacourse/mission-utils');
const { MAP, MESSAGE } = require('./constants');
const Map = require('./Map');

/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(bridgeGame, step, isMovable) {
    const [previousSteps, currentStep] = bridgeGame.getStepsSoFar(step);
    const map = new Map();
    map.printPreviousSteps(previousSteps, step);
    map.printCurrentStep(currentStep, isMovable);
    const { up, down } = map.getMap();
    Console.print(`${up}\n${down}`);
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(bridgeGame, isSuccess) {
    const result = isSuccess ? '성공' : '실패';
    const totalAttempts = bridgeGame.getTotalAttempts();
    Console.print(`\n${MESSAGE.RESULT.GAME_SUCCESS_OR_FAILURE}${result}`);
    Console.print(`${MESSAGE.RESULT.TOTAL_ATTEMPTS}${totalAttempts}`);
  },
};

module.exports = OutputView;
