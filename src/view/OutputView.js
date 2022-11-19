const { OUTPUT_MESSAGES, ERROR_MESSAGES } = require('../constants/messages');
const { print, close } = require('../utils/missionUtil');

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

  printMap(currentBridgeGameMap) {
    print(currentBridgeGameMap);
  },
  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(userGameMapResult, isSuccess, userTryCount) {
    const { gameResult, tryCount, successOrFailure } = OUTPUT_MESSAGES;
    print(gameResult);
    print(userGameMapResult);
    print(successOrFailure(isSuccess)); // 성공 여부는 따로 빼야되나
    print(tryCount(userTryCount));
  },

  printError(errorType) {
    print(ERROR_MESSAGES[errorType]);
  },

  gameClose() {
    close();
  },
};

module.exports = OutputView;
