const { Console } = require('@woowacourse/mission-utils');
const { INFORMATION_MESSAGE } = require('../constants/index.js');
const { isCollectBridgeLength, isValidateMoveInput, isValidateRetryInput } = require('../utils/bridgeGameValidator.js');

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   * 입력받는 다리길의의 유효성을 검사한다.
   * 유효성이 검증된다면 callback 함수를 호출한다.
   * @param {function} callback this가 바인딩된 BridgeGameController.createBridgeByUser 메소드
   */
  readBridgeSize(callback) {
    Console.readLine(INFORMATION_MESSAGE.READ_BRIDGE_SIZE, (userInput) => {
      try {
        isCollectBridgeLength(userInput);
        callback(userInput);
      } catch (error) {
        this.readErrorBridgeSize(error, callback);
      }
    });
  },

  /**
   * 유효하지 않은 다리의 길이일 경우 에러메세지를 출력 후 재시도하게 하는 함수
   * @param {Error} error throw 된 에러 객체
   * @param {function} callback this가 바인딩된 BridgeGameController.createBridgeByUser 메소드
   */
  readErrorBridgeSize(error, callback) {
    Console.print(error.message);
    this.readBridgeSize(callback);
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   * 사용자가 입력한 이동 칸 문자에 대한 유효성을 검사한다.
   * 유효성이 검증된다면 callback 함수를 호출한다.
   * @param {function} callback this가 바인딩된 BridgeGameController.moveByUser 메소드
   */
  readMoving(callback) {
    Console.readLine(INFORMATION_MESSAGE.READ_MOVE, (userInput) => {
      try {
        isValidateMoveInput(userInput);
        callback(userInput);
      } catch (error) {
        this.readErrorMoving(error, callback);
      }
    });
  },

  /**
   * U 또는 D가 아닐 경우 에러메세지를 출력 후 재시도하게 하는 함수
   * @param {Error} error throw 된 에러 객체
   * @param {function} callback this가 바인딩된 BridgeGameController.moveByUser 메소드
   */
  readErrorMoving(error, callback) {
    Console.print(error.message);
    this.readMoving(callback);
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   * 사용자가 입력한 이동 칸 문자에 대한 유효성을 검사한다.
   * 유효성이 검증된다면 callback 함수를 호출한다.
   * @param {function} callback this가 바인딩된 BridgeGameController.askWantRetry 메소드
   */
  readGameCommand(callback) {
    Console.readLine(INFORMATION_MESSAGE.READ_GAME_COMMAND, (userInput) => {
      try {
        isValidateRetryInput(userInput);
        callback(userInput);
      } catch (error) {
        this.readErrorGameCommand(error, callback);
      }
    });
  },

  /**
   * R 또는 Q가 아닐 경우 에러메세지를 출력 후 재시도하게 하는 함수
   * @param {Error} error throw 된 에러 객체
   * @param {function} callback this가 바인딩된 BridgeGameController.askWantRetry 메소드
   */
  readErrorGameCommand(error, callback) {
    Console.print(error.message);
    this.readGameCommand(callback);
  },
};

module.exports = InputView;
