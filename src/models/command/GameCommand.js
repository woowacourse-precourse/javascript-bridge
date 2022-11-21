const { GAME_RULE } = require('../../constants');

const Command = require('./Command');

/**
 * 게임 커맨드를 관리하는 클래스
 * @extends Command
 */
class GameCommand extends Command {
  /**
   * 게임 커맨드 생성
   * @param {string} command
   * @throws {string} 커맨드 값이 R이나 Q가 아니면 예외 처리
   */
  constructor(command) {
    GameCommand.#validate(command);
    super(command);
  }

  /**
   * 커맨드 유효성 검사
   * @param {string} command
   */
  static #validate(command) {
    if (!GameCommand.#isValid(command)) {
      throw '[ERROR] 재시도 여부 입력값은 R 또는 Q여야 합니다.';
    }
  }

  /**
   * 게임 커맨드 조건 부합 여부 확인할 때 사용하는 메서드
   * @param {string} command
   * @returns {boolean}
   */
  static #isValid(command) {
    return command === GAME_RULE.RETRY || command === GAME_RULE.QUIT;
  }

  /**
   * 재시도 커맨드인지 확인할 때 사용하는 메서드
   * @returns {boolean}
   */
  isRetry() {
    return this.getCommand() === GAME_RULE.RETRY;
  }

  /**
   * 종료 커맨드인지 확인할 때 사용하는 메서드
   * @returns {boolean}
   */
  isQuit() {
    return this.getCommand() === GAME_RULE.QUIT;
  }
}

module.exports = GameCommand;
