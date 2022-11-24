/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const { Console } = require('@woowacourse/mission-utils');
const { BridgeMap } = require('../domain/BridgeMap');
const MESSAGE = require('../utils/constants/message');

//  제공된 OutputView 객체를 활용해 구현해야 한다.
//  OutputView의 파일 경로는 변경할 수 있다.
//  OutputView의 메서드의 이름은 변경할 수 없고, 인자는 필요에 따라 추가하거나 변경할 수 있다.
//  값 출력을 위해 필요한 메서드를 추가할 수 있다.
const OutputView = {
  print(text) {
    Console.print(text);
  },

  printBlank() {
    Console.print('');
  },

  close() {
    Console.close();
  },

  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(history) {
    const bridgeMap = new BridgeMap(history);
    const { upPrint, downPrint } = bridgeMap.getMap();
    OutputView.print(upPrint);
    OutputView.print(downPrint);
    OutputView.printBlank();
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(history, tryCount) {
    OutputView.printFinalGameResult();
    OutputView.printMap(history);
    OutputView.printGameSuccessOrNot(history);
    OutputView.printAttemptsNumber(tryCount);
  },

  printGameStartMessage() {
    OutputView.print(MESSAGE.OUTPUT.GAME_START);
    OutputView.printBlank();
  },

  printFinalGameResult() {
    OutputView.print(MESSAGE.OUTPUT.FINAL_GAME_RESULT);
  },

  printGameSuccessOrNot(history) {
    OutputView.print(MESSAGE.OUTPUT.GAME_SUCCESS_OR_NOT(OutputView.getIsSuccess(history)));
  },

  printAttemptsNumber(tryCount) {
    OutputView.print(MESSAGE.OUTPUT.ATTEMPTS_NUMBER(tryCount));
    OutputView.close();
  },

  getIsSuccess(history) {
    return history[history.length - 1].isSuccess;
  },
};

module.exports = OutputView;
