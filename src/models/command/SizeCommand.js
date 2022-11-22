const { BRIDGE_RULE, ERROR_MESSAGE } = require('../../constants');
const CustomError = require('../../utils/CustomError');

const Command = require('./Command');

/**
 * 게임 커맨드를 관리하는 클래스
 * @extends Command
 */
class SizeCommand extends Command {
  /**
   * 게임 커맨드 생성
   * @param {string} command
   * @throws {string} 커맨드 값이 3이상 20이하가 아니라면 예외 처리
   */
  constructor(command) {
    Command.validate(command);
    SizeCommand.#validate(command);
    super(command);
  }

  /**
   * 커맨드 유효성 검사
   * @param {string} command
   */
  static #validate(command) {
    if (SizeCommand.#isIncludeLetter(command)) {
      throw new CustomError(ERROR_MESSAGE.NOT_NUMBER);
    }

    if (!SizeCommand.#isValid(command)) {
      throw new CustomError(ERROR_MESSAGE.RULE_SIZE);
    }
  }

  static #isIncludeLetter(command) {
    return command.split('').find((letter) => Number.isNaN(parseInt(letter, 10)));
  }

  /**
   * 사이즈 커맨드 조건 부합 여부 확인할 때 사용하는 메서드
   * @param {string} command
   * @returns {boolean}
   */
  static #isValid(command) {
    return command >= BRIDGE_RULE.LENGTH_MIN && command <= BRIDGE_RULE.LENGTH_MAX;
  }

  /**
   * 숫자 타입 사이즈 가져올 때 사용하는 메서드
   * @returns {number}
   */
  getSizeNumber() {
    return +this.getCommand();
  }
}

module.exports = SizeCommand;
