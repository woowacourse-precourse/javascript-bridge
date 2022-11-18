const { BRIDGE_RULE, GAME_RULE } = require('../constants');

const InputValidator = {
  validateEmpty(input) {
    if (input === '') {
      throw '[ERROR] 빈 값을 입력했습니다.';
    }
  },

  validateSpace(input) {
    if (input.includes(' ')) {
      throw '[ERROR] 공백을 포함해 입력했습니다.';
    }
  },

  validateNumber(input) {
    if (isNaN(input)) {
      throw '[ERROR] 입력 값은 숫자여야 합니다.';
    }
  },

  isSizeInRange(size) {
    return size >= BRIDGE_RULE.LENGTH_MIN && size <= BRIDGE_RULE.LENGTH_MAX;
  },

  validateSize(size) {
    InputValidator.validateEmpty(size);
    InputValidator.validateSpace(size);
    InputValidator.validateNumber(size);

    if (!InputValidator.isSizeInRange(size)) {
      throw '[ERROR] 다리의 길이는 3이상 20이하의 숫자여야 합니다.';
    }
  },

  isMovingCommand(command) {
    return command === GAME_RULE.UPSIDE || command === GAME_RULE.DOWNSIDE;
  },

  validateMovingCommand(command) {
    if (!InputValidator.isMovingCommand(command)) {
      throw '[ERROR] 이동할 칸 입력 값은 U 또는 D여야 합니다.';
    }
  },

  isGameCommand(command) {
    return command === GAME_RULE.RETRY || command === GAME_RULE.QUIT;
  },

  validateGameCommand(command) {
    if (!InputValidator.isGameCommand(command)) {
      throw '[ERROR] 재시도 여부 입력값은 R 또는 Q여야 합니다.';
    }
  },
};

module.exports = InputValidator;
