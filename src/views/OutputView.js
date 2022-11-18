const { Console } = require('@woowacourse/mission-utils');

const { BRIDGE_MESSAGE, GAME_MESSAGE } = require('../constants');
const OutputUtils = require('../utils/OutputUtils');

/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(bridgeMap) {
    const [upside, downside] = bridgeMap.getMap();

    const upsideString = OutputUtils.stringifyMap(upside);
    const downsideString = OutputUtils.stringifyMap(downside);

    Console.print(`${BRIDGE_MESSAGE.START}${upsideString}${BRIDGE_MESSAGE.END}`);
    Console.print(`${BRIDGE_MESSAGE.START}${downsideString}${BRIDGE_MESSAGE.END}`);
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(bridgeMap, isWin, tryCount) {
    Console.print(GAME_MESSAGE.RESULT_TITLE);
    OutputView.printMap(bridgeMap);
    Console.print('');
    Console.print(GAME_MESSAGE.SUCCESS_OPTION + OutputUtils.convertWinMessage(isWin));
    Console.print(GAME_MESSAGE.TRY_COUNT + tryCount);
  },

  printError(message) {
    Console.print('');
    Console.print(message);
    Console.print('');
  },
};

module.exports = OutputView;
