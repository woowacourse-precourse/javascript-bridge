const { Console } = require('@woowacourse/mission-utils');

const { MESSAGE, MOVING, MOVING_RESULT } = require('../utils/constants');
/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  printStart() {
    Console.print(MESSAGE.GAME_START);
  },

  printNewLine() {
    Console.print('');
  },
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(moveTrace) {
    Console.print(`[ ${this.getUpperMap(moveTrace).join(' | ')} ]`);
    Console.print(`[ ${this.getLowerMap(moveTrace).join(' | ')} ]`);
    this.printNewLine();
  },

  getUpperMap(moveTrace) {
    return moveTrace.map((trace) => this.convertToMap(MOVING.UP, trace));
  },

  getLowerMap(moveTrace) {
    return moveTrace.map((trace) => this.convertToMap(MOVING.DOWN, trace));
  },

  convertToMap(targetMoving, { moving, moveSuccess }) {
    if (targetMoving !== moving) {
      return MOVING_RESULT.BLANK_MARK;
    }

    if (moveSuccess) {
      return MOVING_RESULT.SUCCESS_MARK;
    }
    return MOVING_RESULT.FAIL_MARK;
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult({ tryCount, moveTrace }, gameStatus) {
    Console.print(MESSAGE.RESULT_INFO);
    this.printMap(moveTrace);
    Console.print(MESSAGE[gameStatus]);
    Console.print(MESSAGE.TRY + tryCount);
  },

  printError(errorMessage) {
    Console.print(errorMessage);
  },
};

module.exports = OutputView;
