/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const { Console } = require("@woowacourse/mission-utils");
const { GAME } = require("../lib/Ment");

const OutputView = {
  printGameStart() {
    Console.print(GAME.START);
    return;
  },
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(currentPlayerMovingStatusShape) {
    Console.print(currentPlayerMovingStatusShape);
    return;
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(endGamePlayerMoveShape) {
    Console.print(currentPlayerMovingStatusShape);
    return;
  },

  printGameEnd(isGameWin, reTryCount) {
    if (isGameWin) Console.print(GAME.SUCCESS_END);
    if (!isGameWin) Console.print(GAME.FAILURE_END);
    Console.print(GAME.ALL_RETRY_COUNT(reTryCount));
    return;
  },
};

module.exports = OutputView;
