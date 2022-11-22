const { Console } = require('@woowacourse/mission-utils');
const Message = require('../constant/PrintMessage');
const BridgeSize = require('../model/BridgeSize');
const Direction = require('../model/Direction');
const Retry = require('../model/Retry');
const UserError = require('../util/UserError');

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    let size = 0;
    Console.readLine(Message.INPUT_LENGTH, answer => {
      this.checkSizeError(answer);
      size = answer;
    });
    Console.print(size);
    return size;
  },

  checkSizeError(answer) {
    try {
      const bridgeSize = new BridgeSize(Number(answer));
    } catch (error) {
      this.checkErrorType(error);
      Console.print(error.message);
      this.readBridgeSize();
    }
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    let direction = '';
    Console.readLine(Message.MOVE, answer => {
      this.checkDirectionError(answer);
      direction = answer;
    });
    Console.print(direction);
    return direction;
  },

  checkDirectionError(answer) {
    try {
      const orderDirection = new Direction(answer);
    } catch (error) {
      this.checkErrorType(error);
      Console.print(error.message);
      this.readMoving();
    }
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {
    let retry = '';
    Console.readLine(Message.RETRY, answer => {
      this.checkRetryError(answer);
      retry = answer;
    });
    Console.print(retry);
    return retry;
  },

  checkRetryError(answer) {
    try {
      const retryAnswer = new Retry(answer);
    } catch (error) {
      this.checkErrorType(error);
      Console.print(error.message);
      this.readGameCommand();
    }
  },

  checkErrorType(error) {
    if (error instanceof UserError) {
      return;
    }
    throw error;
  },
};

module.exports = InputView;
