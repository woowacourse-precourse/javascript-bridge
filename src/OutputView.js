const { Console } = require('@woowacourse/mission-utils');
const MapMaker = require('./MapMaker');

/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  print(message) {
    Console.print(message);
  },
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(currentMoveCount, getUserInputResult) {
    const bridgeMap = MapMaker.create(currentMoveCount, getUserInputResult);

    this.print(bridgeMap.map((el) => el.join(this.MAP_CHARACTER.MIDDLE)).join('\n'));
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult({ isGameClear, tryCount }) {
    const gameClearMessage = {
      true: '성공',
      false: '실패',
    };

    this.print(
      `게임 성공 여부: ${gameClearMessage[isGameClear]}\n총 시도한 횟수: ${tryCount}`,
    );
  },
};

module.exports = OutputView;
