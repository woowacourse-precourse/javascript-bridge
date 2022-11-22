const { COMMANDS, DIRECTIONS } = require('./constant/Constant');

const PREFIX = '[ERROR] ';

class MyError extends Error {
  constructor(message) {
    super(`${PREFIX}${message}`);
    this.name = this.constructor.name;
  }
}

class InputError extends MyError {
  static #BRIDGE_SIZE = Object.freeze({
    MIN: 3,
    MAX: 20,
  });

  static MESSAGE = Object.freeze({
    FORMAT: '입력 형식이 올바르지 않습니다.',
    BRIDGE_SIZE: `다리 길이는 ${this.#BRIDGE_SIZE.MIN}부터 ${this.#BRIDGE_SIZE.MAX} 사이의 숫자여야 합니다.`,
    MOVING: `이동할 칸은 ${DIRECTIONS.join(', ')} 중 하나의 문자여야 합니다.`,
    GAME_COMMAND: `게임 명령어는 ${COMMANDS.join(', ')} 중 하나의 문자여야 합니다.`,
  });
}

module.exports = {
  InputError,
};
