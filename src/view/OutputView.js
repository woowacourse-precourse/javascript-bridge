const { Console } = require('@woowacourse/mission-utils');
const { GAME_MESSAGE } = require('../utils/constant');

/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  printStart() {
    Console.print(GAME_MESSAGE.START);
  },

  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(bridgeGame) {
    const [upside, downside] = bridgeGame.getStringMap();

    Console.print(upside);
    Console.print(downside + '\n');
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(bridgeGame) {
    const result = bridgeGame.getResult();

    Console.print(GAME_MESSAGE.RESULT_BRIDGE);

    this.printMap(bridgeGame);
    this.getResultMessage(result);
  },

  getResultMessage(result) {
    const [round, isSuccess] = result;
    const success = isSuccess ? GAME_MESSAGE.SUCCESS : GAME_MESSAGE.FAIL;

    Console.print(`${GAME_MESSAGE.RESULT_STATUS}${success}`);
    Console.print(`${GAME_MESSAGE.ROUND}${round}${round}`);
  },
};

module.exports = OutputView;
