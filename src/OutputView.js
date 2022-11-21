const { Console } = require('@woowacourse/mission-utils');
const { MAP, MESSAGE } = require('./constants');

/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(bridgeGame, step, moving) {
    const isMovable = bridgeGame.move(step, moving);
    const [previousSteps, currentStep] = bridgeGame.getStepsSoFar(step);
    let up = `${MAP.BEGINNING_OF_THE_BRIDGE}`;
    let down = `${MAP.BEGINNING_OF_THE_BRIDGE}`;
    for (let i = 0; i < step; ++i) {
      switch (previousSteps.charAt(i)) {
        case 'U':
          up += `${MAP.MOVABLE}${MAP.DIVISION_OF_THE_BRIDGE}`;
          down += `${MAP.UNSELECTED}${MAP.DIVISION_OF_THE_BRIDGE}`;
          break;
        case 'D':
          up += `${MAP.UNSELECTED}${MAP.DIVISION_OF_THE_BRIDGE}`;
          down += `${MAP.MOVABLE}${MAP.DIVISION_OF_THE_BRIDGE}`;
          break;
      }
    }

    switch (currentStep) {
      case 'U':
        if (isMovable) {
          up += `${MAP.MOVABLE}${MAP.END_OF_THE_BRIDGE}`;
          down += `${MAP.UNSELECTED}${MAP.END_OF_THE_BRIDGE}`;
        } else {
          up += `${MAP.UNSELECTED}${MAP.END_OF_THE_BRIDGE}`;
          down += `${MAP.UNMOVABLE}${MAP.END_OF_THE_BRIDGE}`;
        }
        break;
      case 'D':
        if (isMovable) {
          up += `${MAP.UNSELECTED}${MAP.END_OF_THE_BRIDGE}`;
          down += `${MAP.MOVABLE}${MAP.END_OF_THE_BRIDGE}`;
        } else {
          up += `${MAP.UNMOVABLE}${MAP.END_OF_THE_BRIDGE}`;
          down += `${MAP.UNSELECTED}${MAP.END_OF_THE_BRIDGE}`;
        }
        break;
    }

    Console.print(`${up}\n${down}`);
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(bridgeGame, isSuccess) {
    const result = isSuccess ? '성공' : '실패';
    Console.print(`${MESSAGE.RESULT.GAME_SUCCESS_OR_FAILURE}${result}`);
    Console.print(`${MESSAGE.RESULT.TOTAL_ATTEMPTS}`);
  },
};

module.exports = OutputView;
