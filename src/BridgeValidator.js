/**
 * 다리 건너기 게임 진행을 위해 입력받은 값의 유효성을 검사하는 역할을 한다.
 */
const BridgeValidator = {
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
