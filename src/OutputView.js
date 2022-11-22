const MissionUtils = require("@woowacourse/mission-utils");
const { encodeBridgeSide, encodeGameResult } = require("./utils/func/encode");
const GameStatus = require("./model/GameStatus");
const MovementStatus = require("./model/movementStatus");
const OutputViewMessage = require("./utils/const/outputViewMessage");
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
    const { round, upperSideStatus, lowerSideStatus } = movementState;
    const upperSidePrintBody = encodeBridgeSide(round, upperSideStatus);
    const lowerSidePrintBody = encodeBridgeSide(round, lowerSideStatus);
    this.blockPrintHelper([upperSidePrintBody, lowerSidePrintBody]);
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   * @param {GameStatus} gameStatus
   */

  printResult(gameStatus) {
    const resultPrintBody = encodeGameResult(gameStatus);
    this.blockPrintHelper(resultPrintBody);
  },

  printStart() {
    this.blockPrintHelper([OutputViewMessage.gameStart]);
  },
  printEnd() {
    this.blockPrintHelper(["\n", OutputViewMessage.gameEnd]);
  },

  print(message) {
    MissionUtils.Console.print(message);
  },
  blockPrintHelper(printTargetArray) {
    printTargetArray.forEach((printTarget) => {
      MissionUtils.Console.print(printTarget);
    });
  },
};

module.exports = OutputView;
