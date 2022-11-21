const { printMessage, createMap } = require("./utils/index");
const { GAME_MESSAGE } = require("./constants");
/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  /**
   * 게임 시작 메세지를 출력한다.
   */
  printStart() {
    printMessage(GAME_MESSAGE.START);
  },
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   */
  printMap(up, down) {
    printMessage(createMap(up));
    printMessage(createMap(down));
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   */
  printResult(up, down, successStatus) {
    printMessage(GAME_MESSAGE.RESULT);
    this.printMap(up, down);
    printMessage(GAME_MESSAGE.SUCCESS_STATUS(successStatus));
  },
};

module.exports = OutputView;
