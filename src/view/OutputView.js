const { OUTPUT_MESSAGES, ERROR_MESSAGES } = require('../constants/messages');
const { print } = require('../utils/missionUtil');

const OutputView = {
  printStart() {
    const { gameStart } = OUTPUT_MESSAGES;
    print(gameStart);
  },
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */

  drawBridge(bridgeGame, answer) {
    // 여기서 다리를 그리자
    // 사용자가 고른 다리면 O 또는 X 표시, 안 골랐으면 공백 3칸을 추가한다.
  },

  printMap(bridgeGame, answer) {},

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult() {},

  printError(errorType) {
    print(ERROR_MESSAGES[errorType]);
  },
};

module.exports = OutputView;
