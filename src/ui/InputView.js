/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const { Console } = require('@woowacourse/mission-utils');
const OutputView = require('./OutputView');
const { toInt } = require('../utils/common');
const { COMMAND } = require('../utils/constants/game');
const MESSAGE = require('../utils/constants/message');
const { validateRetryCommand, validateMoveCommand, validateBridgeSize } = require('../utils/validation/gameInput');
//  제공된 InputView 객체를 활용해 구현해야 한다.
//  InputView의 파일 경로는 변경할 수 있다.
//  InputView의 메서드의 인자는 변경할 수 있다.
//  사용자 값 입력을 위해 필요한 메서드를 추가할 수 있다.
const isRetryCommand = (retryOrQuit) => retryOrQuit === COMMAND.RETRY;

const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  // depth 3 인상태
  readBridgeSize(makeBridge, moveProcess) {
    Console.readLine(MESSAGE.INPUT.BRIDGE_LENGTH, (input) => {
      try {
        validateBridgeSize(toInt(input));
        makeBridge(toInt(input));
        moveProcess();
      } catch (error) {
        OutputView.print(error.message);
        InputView.readBridgeSize(makeBridge, moveProcess);
      }
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(move, retryOrQuitProcess) {
    Console.readLine(MESSAGE.INPUT.SELECT_DIRECTION, (upOrDown) => {
      try {
        validateMoveCommand(upOrDown);
        move(upOrDown);
        retryOrQuitProcess();
      } catch (error) {
        OutputView.print(error.message);
        InputView.readMoving(move, retryOrQuitProcess);
      }
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(retry, quit) {
    Console.readLine(MESSAGE.INPUT.RETRY_OR_QUIT, (retryOrQuit) => {
      try {
        validateRetryCommand(retryOrQuit);
        isRetryCommand(retryOrQuit) ? retry() : quit();
      } catch (error) {
        OutputView.print(error.message);
        InputView.readGameCommand(retry, quit);
      }
    });
  },
};

module.exports = InputView;
