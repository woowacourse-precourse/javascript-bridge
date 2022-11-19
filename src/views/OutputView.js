const { Console } = require('@woowacourse/mission-utils');
const MESSAGE = require('../utils/message');
/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  printStartMessage() {
    Console.print(MESSAGE.start);
  },

  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(trials) {
    let [upStage, downStage] = trials.reduce(
      (bridgeMap, trial) => {
        let [upStage, downStage] = bridgeMap;

        if (trial.direction === 'U') {
          upStage += ` ${trial.result} |`;
          downStage += '   |';
        }

        if (trial.direction === 'D') {
          upStage += `   |`;
          downStage += ` ${trial.result} |`;
        }

        return [upStage, downStage];
      },
      ['[', '[']
    );

    upStage = upStage.slice(0, -1) + ']';
    downStage = downStage.slice(0, -1) + ']';

    Console.print(upStage);
    Console.print(downStage);
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult() {},
};

module.exports = OutputView;
