/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */

const { Console } = require('@woowacourse/mission-utils');
const OutputView = require('./OutputView');
const InputValidation = require('../validation/InputValidation');
const { INPUT_MESSAGE } = require('../constants/message.constants');

const InputView = {
  /**
   * 플레이어로부터 다리의 길이를 입력 받는 메서드
   * @param {callback} nextStep 해당 메서드가 종료되고 실행할 콜백함수
   */
  readBridgeSize(nextStep) {
    Console.readLine(INPUT_MESSAGE.BRIDGE_SIZE, (userInput) => {
      try {
        this.readBridgeSizeTry(userInput, nextStep);
      } catch (error) {
        OutputView.printError(error);
        this.readBridgeSize(nextStep);
      }
    });
  },

  /**
   * 플레이어가 입력한 다리의 길이에 대해 유효성 검사 후 콜백함수를 실행하는 메서드
   * @param {string} userInput 플레이어가 입력한 다리의 길이
   * @param {callback} nextStep 해당 메서드가 종료되고 실행할 콜백함수
   */
  readBridgeSizeTry(userInput, nextStep) {
    const bridgeSize = Number(userInput);
    this.validateBridgeSize(bridgeSize);
    nextStep(bridgeSize);
  },

  /**
   * 플레이어로부터 이동할 경로를 입력 받는 메서드
   * @param {callback} nextStep 해당 메서드가 종료되고 실행할 콜백함수
   */
  readMoving(nextStep) {
    Console.readLine(INPUT_MESSAGE.MOVEMENT, (userInput) => {
      try {
        this.readMovingTry(userInput, nextStep);
      } catch (error) {
        OutputView.printError(error);
        this.readMoving(nextStep);
      }
    });
  },

  /**
   * 플레이어가 입력한 이동할 칸에 대해 유효성 검사 후 콜백함수를 실행하는 메서드
   * @param {string} userInput 플레이어가 입력한 이동할 칸
   * @param {callback} nextStep 해당 메서드가 종료되고 실행할 콜백함수
   */
  readMovingTry(userInput, nextStep) {
    const movement = userInput;
    this.validateMovement(movement);
    nextStep(movement);
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는 메서드
   * @param {callback} nextStep 해당 메서드가 종료되고 실행할 콜백함수
   */
  readGameCommand(nextStep) {
    Console.readLine(INPUT_MESSAGE.RESTART_OR_QUIT, (userInput) => {
      try {
        this.readGameCommandTry(userInput, nextStep);
      } catch (error) {
        OutputView.printError(error);
        this.readGameCommand(nextStep);
      }
    });
  },

  /**
   * 플레이어가 입력한 게임 재시작 및 종료 명령에 대해 유효성 검사 후 콜백함수를 실행하는 메서드
   * @param {string} userInput 플레이어가 입력한 게임 재시작 및 종료 명령
   * @param {callback} nextStep 해당 메서드가 종료되고 실행할 콜백함수
   */
  readGameCommandTry(userInput, nextStep) {
    const restartOrQuit = userInput;
    this.validateGameCommand(restartOrQuit);
    nextStep(restartOrQuit);
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
