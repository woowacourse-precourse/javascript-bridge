const InputView = require("./InputView");
const OutputView = require("./OutputView");

class View {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(callback) {
    InputView.readBridgeSize(callback);
  }

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(callback) {
    InputView.readMoving(callback);
  }

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(callback) {
    InputView.readGameCommand(callback);
  }

  /**
   * 게임의 시작을 출력한다.
   */
  printStart() {
    OutputView.printStart();
  }

  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   */
  printMap(map) {
    OutputView.printMap(map);
  }

  /**
   * 에러 메세지를 출력한다.
   */
  printError(message) {
    OutputView.printError(message);
  }

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   */
  printResult(map, result, count) {
    OutputView.printResult(map, result, count);
  }
}

module.exports = View;