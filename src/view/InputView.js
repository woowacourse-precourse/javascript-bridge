/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */

const { Console } = require('@woowacourse/mission-utils');
const OutputView = require('./OutputView');
const InputValidation = require('../validation/InputValidation');

const InputView = {
  /**
   * 플레이어로부터 다리의 길이를 입력 받는다.
   * @param {function()} nextStep readBridgeSize의 실행이 끝나고 실행 될 콜백 함수
   */
  readBridgeSize(nextStep) {
    Console.readLine('다리의 길이를 입력해주세요.\n', (userInput) => {
      try {
        const bridgeSize = Number(userInput);
        this.validateBridgeSize(bridgeSize);
        nextStep(bridgeSize);
      } catch (error) {
        OutputView.printError(error);
        this.readBridgeSize(nextStep);
      }
    });
  },

  /**
   * 플레이어로부터 이동할 칸을 입력 받는다.
   * @param {function()} nextStep readMoving의 실행이 끝나고 실행 될 콜백 함수
   */
  readMoving(nextStep) {
    Console.readLine('이동할 칸을 선택해주세요. (위: U, 아래: D)\n', (userInput) => {
      try {
        const movement = userInput;
        this.validateMovement(movement);
        nextStep(movement);
      } catch (error) {
        OutputView.printError(error);
        this.readMoving(nextStep);
      }
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(nextStep) {
    Console.readLine('게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n', (userInput) => {
      try {
        const restartOrQuit = userInput;
        this.validateGameCommand(restartOrQuit);
        nextStep(restartOrQuit);
      } catch (error) {
        OutputView.printError(error);
        this.readGameCommand(nextStep);
      }
    });
  },

  /**
   * 플레이어가 입력한 다리 길이에 대한 유효성 검사 메서드
   * @param {number} bridgeSize 플레이어가 입력한 다리의 길이
   */
  validateBridgeSize(bridgeSize) {
    InputValidation.isBridgeSizeInteger(bridgeSize);
    InputValidation.isBridgeSizeInRange(bridgeSize);
  },

  /**
   * 플레이어가 입력한 이동에 대한 유효성 검사 메서드
   * @param {string} movement 플레이어가 입력한 이동
   */
  validateMovement(movement) {
    InputValidation.isMovementAvailable(movement);
  },

  /**
   * 플레이어가 입력한 게임 재시작 명령에 대한 유효성 검사 메서드
   * @param {string} restartOrQuit 플레이어가 입력한 명령
   */
  validateGameCommand(restartOrQuit) {
    InputValidation.isGameCommandAvailable(restartOrQuit);
  },
};

module.exports = InputView;
