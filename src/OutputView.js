const MissionUtils = require('@woowacourse/mission-utils');
const BridgeGame = require('./BridgeGame');

/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  // 시작 문구 출력
  startGame() {
    MissionUtils.Console.print('다리 건너기 게임을 시작합니다.');
  },

  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  // 배열 값을 받아 그대로 출력
  printMap() {
    const bridges = BridgeGame.move();
    MissionUtils.Console.print('[');
    MissionUtils.Console.print(bridges[0].join('|'));
    MissionUtils.Console.print(']');
    MissionUtils.Console.print('\n');
    MissionUtils.Console.print('[');
    MissionUtils.Console.print(bridges[1].join('|'));
    MissionUtils.Console.print(']');
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(printMap, result, count) {
    MissionUtils.Console.print('최종 게임 결과');
    this.printMap;
    MissionUtils.Console.print(
      '게임 성공 여부: ' +
        BridgeGame.result +
        '\n' +
        '총 시도한 횟수: ' +
        BridgeGame.count
    );
  },
};

module.exports = OutputView;
