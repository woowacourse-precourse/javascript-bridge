const { Console } = require('@woowacourse/mission-utils');
const createMaps = require('../utils/createMaps');
const GameMessage = require('../constants/GameMessage');
/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   *
   * @param {import('../BridgeGame').Result} result
   */
  printMap(result) {
    const maps = createMaps(result);

    maps.forEach((map) => this.printMessage(`[ ${map.join(' | ')} ]`));
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   *
   * @param {import('../BridgeGame').Result} result
   */
  printResult(result) {
    const messages = [
      `\n게임 성공 여부: ${result.flag === 'GAME_END' ? '성공' : '실패'}`,
      `총 시도한 횟수: ${result.status.playCount}`,
    ];

    this.printMessage(GameMessage.END);
    this.printMap(result);
    messages.forEach((message) => this.printMessage(message));

    Console.close();
  },

  /**
   * message를 출력하는 메소드
   *
   * @param {string} message
   */
  printMessage(message) {
    Console.print(message);
  },
};

module.exports = OutputView;
