const MissionUtils = require('@woowacourse/mission-utils');
const BridgeValidator = require('../Bridge.validator');
const { OUTPUT } = require('../Resource/String');
/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * @param {string[]} bridgeAnswer bridgeAnswer를 받습니다.
   * @param {string[]} bridge bridge를 받습니다.
   */
  printMap(bridgeGame) {
    BridgeValidator.checkBridgeAnswer(bridgeGame.bridgeAnswers);
    BridgeValidator.checkBridge(bridgeGame.bridge);
    this.printBridgeByPosition(bridgeGame.bridgeAnswers, bridgeGame.bridge, 'U');
    this.printBridgeByPosition(bridgeGame.bridgeAnswers, bridgeGame.bridge, 'D');
  },

  printBridgeByPosition(bridgeAnswer, bridge, position) {
    const bridgeByPosition = bridgeAnswer.map((bridgeAnswerElement, index) =>
      bridge[index] == position ? bridgeAnswerElement : ' ',
    );
    const bridgeString = bridgeByPosition.join(' | ');
    MissionUtils.Console.print(`[ ${bridgeString} ]`);
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   */
  printResult(bridgeGame) {
    MissionUtils.Console.print(OUTPUT.GAME_END);
    this.printMap(bridgeGame);
    const gameResult = bridgeGame.isSuccess ? '성공': '실패';

    BridgeValidator.isNumber(bridgeGame.tryCount);
    MissionUtils.Console.print(OUTPUT.GAME_RESULT + gameResult);
    MissionUtils.Console.print(OUTPUT.GAME_TRY + bridgeGame.tryCount);
  },
};

module.exports = OutputView;
