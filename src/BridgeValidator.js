/**
 * 다리 건너기 게임 진행을 위해 입력받은 값의 유효성을 검사하는 역할을 한다.
 */
const BridgeValidator = {
  MIN_BRIDGE_SIZE: 3,
  MAX_BRIDGE_SIZE: 20,

  /**
   * 사용자가 입력한 다리 길이의 값에 대한 유효성을 검사하는 메서드
   * @param {number} bridgeSize
   * @throws 숫자가 아닌 문자가 포함된 경우 error를 throw한다.
   * @throws 다리 길이 범위 이외의 값인 경우 error를 throw한다.
   */
  validateBridgeSize(bridgeSizeInput) {
    if (this.isNotNumber(bridgeSizeInput)) {
      throw new Error(
        '[ERROR] 다리 길이를 위한 값에 숫자가 아닌 문자가 입력되었습니다.',
      );
    }

    if (this.isOutOfBound(parseInt(bridgeSizeInput, 10))) {
      throw new Error('[ERROR] 다리 길이는 3 이상 20 이하의 숫자여야 합니다.');
    }
  },

  /**
   * 사용자가 입력한 값에 숫자가 아닌 문자가 포함되는지 판단하는 메서드
   * @param {string} inputValue 사용자로부터 입력받은 값
   * @returns {boolean} 숫자가 아닌 문자가 포함된 경우 true, 아니면 false를 반환한다.
   */
  isNotNumber(inputValue) {
    return !/^\d+$/.test(inputValue);
  },

  /**
   * 사용자가 입력한 값이 다리 길이 범위 이외의 값인지 판단하는 메서드
   * @param {number} bridgeSize 사용자로부터 입력받은 다리의 길이
   * @returns {boolean} 다리 길이 범위 이외의 값이면 true, 아니면 false를 반환한다.
   */
  isOutOfBound(bridgeSize) {
    return (
      bridgeSize < this.MIN_BRIDGE_SIZE || bridgeSize > this.MAX_BRIDGE_SIZE
    );
  },

  /**
   * 사용자가 입력한 이동할 칸에 대한 유효성을 검사하는 메서드
   * @param {string} moving
   * @throws 유효하지 않은 이동인 경우 error를 throw한다.
   */
  validateMoving(moving) {
    if (this.isInvalidMoving(moving)) {
      throw new Error(
        '[ERROR] 유효하지 않은 이동입니다. U 또는 D를 입력해 주세요.',
      );
    }
  },

  /**
   * 사용자가 입력한 이동이 유효하지 않은 이동인지 판단하는 메서드
   * @param {string} moving
   * @returns {boolean} 유효하지 않은 이동인 경우 true, 아니면 false를 반환한다.
   */
  isInvalidMoving(moving) {
    return !['U', 'D'].includes(moving);
  },

  /**
   * 사용자가 입력한 게임 명령에 대한 유효성을 검사하는 메서드
   * @param {string} gameCommand
   * @throws 유효하지 않은 게임 명령인 경우 error를 throw한다.
   */
  validateGameCommand(gameCommand) {
    if (this.isInvalidGameCommand(gameCommand)) {
      throw new Error(
        '[ERROR] 유효하지 않은 명령입니다. 재시작을 원하면 R, 종료를 원하면 Q를 입력해 주세요.',
      );
    }
  },

  /**
   * 사용자가 입력한 게임 명령이 유효하지 않은 명령인지 판단하는 메서드
   * @param {string} gameCommand
   * @returns {boolean} 유효하지 않은 게임 명령인 경우 true, 아니면 false를 반환한다.
   */
  isInvalidGameCommand(gameCommand) {
    return !['R', 'Q'].includes(gameCommand);
  },
};

module.exports = BridgeValidator;
