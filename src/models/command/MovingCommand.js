const { GAME_RULE } = require('../../constants');

const Command = require('./Command');

/**
 * 이동 커맨드를 관리하는 클래스
 * @extends Command
 */
class MovingCommand extends Command {
  /**
   * 이동 커맨드 생성
   * @param {string} command
   * @throws {string} 커맨드 값이 U나 D가 아니면 예외 처리
   */
  constructor(command) {
    MovingCommand.#validate(command);
    super(command);
  }

  /**
   * 커맨드 유효성 검사
   * @param {string} command
   */
  static #validate(command) {
    if (!MovingCommand.#isValid(command)) {
      throw '[ERROR] 이동할 칸 입력 값은 U 또는 D여야 합니다.';
    }
  }

  /**
   * 이동 커맨드 조건 부합 여부 확인할 때 사용하는 메서드
   * @param {string} command
   * @returns {boolean}
   */
  static #isValid(command) {
    return command === GAME_RULE.UPSIDE || command === GAME_RULE.DOWNSIDE;
  }

  /**
   * 위 칸 커맨드인지 확인할 때 사용하는 메서드
   * @returns {boolean}
   */
  isUpside() {
    return this.getCommand() === GAME_RULE.UPSIDE;
  }

  /**
   * 아래 칸 커맨드인지 확인할 때 사용하는 메서드
   * @returns {boolean}
   */
  isDownside() {
    return this.getCommand() === GAME_RULE.DOWNSIDE;
  }

  /**
   * 다리 건너기 성공했는지 확인할 때 사용하는 메서드
   * @param {('U' | 'D')} bridgeCurrent
   * @returns
   */
  isCrossed(bridgeCurrent) {
    return this.getCommand() === bridgeCurrent;
  }
}

module.exports = MovingCommand;
