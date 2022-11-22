/**
 * 사용자가 입력한 게임 명령에 대한 유효성을 검사하는 역할을 한다.
 */
const BridgeGameCommandValidator = {
  RETRY: 'R',
  QUIT: 'Q',
  /**
   * 사용자가 입력한 게임 명령에 대한 유효성을 검사하는 메서드
   * @param {string} gameCommand
   * @throws 유효하지 않은 게임 명령인 경우 error를 throw한다.
   */
  validate(gameCommand) {
    if (this.isInvalidGameCommand(gameCommand)) {
      throw new Error(
        `[ERROR] 유효하지 않은 명령입니다. 재시작을 원하면 ${this.RETRY}, 종료를 원하면 ${this.QUIT}를 입력해 주세요.`,
      );
    }
  },

  /**
   * 사용자가 입력한 게임 명령이 유효하지 않은 명령인지 판단하는 메서드
   * @param {string} gameCommand
   * @returns {boolean} 유효하지 않은 게임 명령인 경우 true, 아니면 false를 반환한다.
   */
  isInvalidGameCommand(gameCommand) {
    return ![this.RETRY, this.QUIT].includes(gameCommand);
  },
};

module.exports = BridgeGameCommandValidator;
