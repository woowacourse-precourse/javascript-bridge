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
}

module.exports = Command;
