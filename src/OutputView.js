const { Console } = require('@woowacourse/mission-utils');
const { MSG, DIRECTION, ROW_IDX, EMPTY } = require('./libs/constant');
const TypeConverter = require('./TypeConverter');

/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(movedBridge) {
    const bridgeRows = this.getBridgeRows(movedBridge);
    const bridgeRowsStr = bridgeRows.map(TypeConverter.rowArrToStr).join('\n') + '\n';

    Console.print(bridgeRowsStr);
  },

  getBridgeRows(movedBridge) {
    const rows = [[], []];

    movedBridge.forEach(({ direction, correct }) => {
      const result = correct ? DIRECTION.correct : DIRECTION.wrong;
      const rowIdx = ROW_IDX[direction];
      const restIdx = Math.abs(rowIdx - 1);

      rows[rowIdx].push(result);
      rows[restIdx].push(EMPTY);
    });

    return rows;
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(bridgeGame) {
    const { result, cntRetry } = bridgeGame.getStatistic();

    Console.print(MSG.endGame);
    this.printMap(bridgeGame.getMovedBridge());
    Console.print(MSG.statisticGame(result, cntRetry));
  },
};

module.exports = OutputView;
