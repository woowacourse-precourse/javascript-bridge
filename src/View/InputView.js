const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE } = require('../../constants/Message');
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  conectStart(functionArr) {
    InputView.readBridgeSize.bind(this)(functionArr);
  },
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(functionArr) {
    const [makeBridge, moveBridge, controlGame] = functionArr;
    Console.readLine(MESSAGE.READ_BRIDGE_SIZE, (input) => {
      try {
        makeBridge.call(this, input);
        InputView.readMoving.call(this, [moveBridge, controlGame]);
      } catch (err) {
        printMessage(err);
        InputView.readBridgeSize.bind(this)(functionArr);
      }
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(functionArr) {
    Console.readLine(MESSAGE.READ_MOVE, (input) => {
      try {
        const [isMove, isEnd] = functionArr[0].call(this, input);
        if (isMove && isEnd) InputView.readMoving.call(this, functionArr);
        if (!isMove) InputView.readGameCommand.call(this, functionArr[1]);
      } catch (err) {
        printMessage(err);
        InputView.readMoving.bind(this)(functionArr);
      }
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(controlGame) {
    Console.readLine(MESSAGE.RETRY, (input) => {
      try {
        controlGame.call(this, input);
      } catch (err) {
        printMessage(err);
        InputView.readGameCommand.bind(this)(controlGame);
      }
    });
  },
};

module.exports = InputView;
