const { OUTPUT } = require("../constants/message");
const { REPRESENTATION } = require("../constants/values");
const { print } = require("../utils/utils");
/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  printNotifyGameStart() {
    print(OUTPUT.NOTIFY_START);
  },
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(currentMap) {
    print(`[${currentMap.upperPart.join(REPRESENTATION.SEPERATOR)}]`);
    print(`[${currentMap.lowerPart.join(REPRESENTATION.SEPERATOR)}]`);
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(finalMap) {
    print(OUTPUT.NOTIFY_RESULT);
    this.printMap(finalMap);
  },
  printIsGameClear(isGameClear) {
    print(OUTPUT.NOTIFY_GAME_CLEAR_OR_NOT(isGameClear));
  },
  printAttemptsCount(attempts) {
    print(OUTPUT.NOTIFY_TOTAL_TRIAL(attempts));
  },
  printErrorLog(event) {
    print(event);
  },
};

module.exports = OutputView;
