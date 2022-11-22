const { ERROR_MESSAGE } = require('../../constants');
const CustomError = require('../../utils/CustomError');

/**
 * 커맨드를 관리하는 클래스
 * @extends Command
 */
class Command {
  #command;

  /**
   * 커맨드 생성
   * @param {string} command
   */
  constructor(command) {
    this.#command = command;
  }

  /**
   * 커맨드를 가져올 때 사용하는 메서드
   * @returns {string}
   */
  getCommand() {
    return this.#command;
  }

  static validate(command) {
    if (command === '') {
      throw new CustomError(ERROR_MESSAGE.EMPTY);
    }

    if (Command.#isSpaceBeforeOrAfter(command)) {
      throw new CustomError(ERROR_MESSAGE.SPACE);
    }
  }

  static #isSpaceBeforeOrAfter(command) {
    return command.length !== command.trim().length;
  }
}

module.exports = Command;
