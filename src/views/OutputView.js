const { Console } = require('@woowacourse/mission-utils');

const { BRIDGE_MESSAGE, GAME_MESSAGE, GAME_RULE } = require('../constants');
const OutputUtils = require('../utils/OutputUtils');

const BridgeGame = require('../models/BridgeGame');
const BridgeMap = require('../models/BridgeMap');

/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * @param {BridgeMap} bridgeMap
   */
  printMap(bridgeMap) {
    const map = bridgeMap.getMap();

    const upsideString = OutputUtils.stringifyMap(map[GAME_RULE.UPSIDE]);
    const downsideString = OutputUtils.stringifyMap(map[GAME_RULE.DOWNSIDE]);

    Console.print(BRIDGE_MESSAGE.START + upsideString + BRIDGE_MESSAGE.END);
    Console.print(BRIDGE_MESSAGE.START + downsideString + BRIDGE_MESSAGE.END);
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * @param {BridgeGame.FinalStatus} param0
   */
  printResult({ bridgeMap, isWin, tryCount }) {
    Console.print(GAME_MESSAGE.RESULT_TITLE);
    OutputView.printMap(bridgeMap);
    Console.print('');
    Console.print(GAME_MESSAGE.SUCCESS_OPTION + OutputUtils.convertWinMessage(isWin));
    Console.print(GAME_MESSAGE.TRY_COUNT + tryCount);
  },

  /**
   * 에러 메시지를 출력한다.
   * @param {string} message
   */
  printError(message) {
    Console.print('');
    Console.print(message);
    Console.print('');
  },
};

module.exports = OutputView;
