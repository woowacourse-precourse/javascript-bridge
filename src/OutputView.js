const MissionUtils = require("@woowacourse/mission-utils");
const { encodeBridgeSide, encodeGameResult } = require("./utils/func/encode");
const GameResult = require("./utils/type/gameResult");
const { MovementStatus } = require("./utils/type/movementStatus");
/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   * @param {MovementStatus} movementState
   */
  printMap(movementState) {
    const { moveLength, leftSideStatus, rightSideStatus } = movementState;
    const leftSidePrintBody = this.encodeBridgeSide(moveLength, leftSideStatus);
    const rightSidePrintBody = this.encodeBridgeSide(
      moveLength,
      rightSideStatus
    );
    this.blockPrintHelper([leftSidePrintBody, rightSidePrintBody]);
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   * @param {GameResult} gameResult
   */

  printResult(gameResult) {
    const resultPrintBody = encodeGameResult(gameResult);
    this.blockPrintHelper(resultPrintBody);
  },

  blockPrintHelper(printTargetArray) {
    printTargetArray.forEach((printTarget) => {
      MissionUtils.Console.print(printTarget);
    });
    MissionUtils.Console.print("\n");
  },
};

module.exports = OutputView;
