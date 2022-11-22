const { Console } = require('@woowacourse/mission-utils');

const { GAME_MESSAGE } = require('../constants');
const OutputUtils = require('../utils/OutputUtils');

const BridgeGame = require('../models/BridgeGame');
const BridgeMaps = require('../models/map/BridgeMaps');

/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * @param {BridgeMaps} bridgeMap
   */
  printMap(bridgeMap) {
    const [upside, downside] = bridgeMap.getMap();

    const upsideString = OutputUtils.stringifyBridgeMap(upside);
    const downsideString = OutputUtils.stringifyBridgeMap(downside);

    Console.print(upsideString);
    Console.print(downsideString);
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * @param {BridgeGame.FinalStatus} param0
   */
  printResult({ bridgeMap, isWin, tryCount }) {
    Console.print(GAME_MESSAGE.RESULT_TITLE);
    OutputView.printMap(bridgeMap);
    Console.print('');
    Console.print(GAME_MESSAGE.WIN_OPTION + OutputUtils.convertToWinMessage(isWin));
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
