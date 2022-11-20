const MissionUtils = require("@woowacourse/mission-utils");
const ErrorView = require("./ErrorView");
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   * @param {function()} proceed 제대로 된 입력을 받으면 진행할 함수
   */
  readBridgeSize(proceed) {
    MissionUtils.Console.readLine("\n다리의 길이를 입력해주세요.\n", (input) => {
      (this.isValidBridgeSizeInput(input)) ?
        proceed(parseInt(input)) : this.handleBridgeSizeException(proceed);
    })
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   * @param {function()} proceed 제대로 된 입력을 받으면 진행할 함수
   */
  readMoving(proceed) {
    MissionUtils.Console.readLine("\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n", (input) => {
      (this.isValidMoveInput(input)) ?
        proceed(input) : this.handleMoveException(proceed);
    })
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   * @param {function()} proceed 제대로 된 입력을 받으면 진행할 함수
   */
  readGameCommand(proceed) {
    MissionUtils.Console.readLine("\n게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n", (input) => {
      (this.isValidGameCommand(input)) ?
        proceed(input) : this.handleGameCommandException(proceed);
    })
  },

  /**
   * 올바른 다리 길이 입력인지 판단하는 함수
   * @param {string} input 
   * @returns {boolean} 올바른 다리 길이 입력인지 여부
   */
  isValidBridgeSizeInput(input) {
    const INPUT_IN_NUMBER = parseInt(input);
    return (INPUT_IN_NUMBER !== NaN && INPUT_IN_NUMBER >= 3 && INPUT_IN_NUMBER <= 20);
  },

  /**
   * 다리 길이 입력이 올바르지 않을 때 수행하는 함수
   * @param {function()} proceed 다리 길이가 올바른 입력일때 수행하는 다음 함수
   */
  handleBridgeSizeException(proceed) {
    ErrorView.throwBridgeSizeError();
    this.readBridgeSize(proceed);
  },

  /**
   * 올바른 이동 입력인지 판단하는 함수
   * @param {string} input 입력한 커맨드
   * @returns {boolean} 올바른 이동 입력인지 여부
   */
  isValidMoveInput(input) {
    return (input === "U") || (input === "D");
  },

  /**
   * 올바르지 않은 이동 입력에 대해 처리하는 함수
   * @param {function()} proceed 올바른 이동 입력에 대해 수행하는 함수
   */
  handleMoveException(proceed) {
    ErrorView.throwMoveError();
    this.readMoving(proceed);
  },

  /**
   * 올바른 게임 재시도 및 종료 커맨드인지 판단하는 함수
   * @param {string} input 입력한 커맨드
   * @returns {boolean} 올바른 커맨드인지 여부
   */
  isValidGameCommand(input) {
    return (input === "R") || (input === "Q");
  },

  /**
   * 올바르지 않은 게임 재시도 및 종료 커맨드에 대해 처리하는 함수
   * @param {function()} proceed 올바른 커맨드에 대해 수행하는 함수
   */
  handleGameCommandException(proceed) {
    ErrorView.throwGameCommandError();
    this.readGameCommand(proceed);
  }
};

module.exports = InputView;
