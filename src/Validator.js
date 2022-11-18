const Validator = {
  sizeValidityCheck: (size) => {
    const regex = /^\d+$/;
    Validator.throwErrorIfHasBlank(size);
    if (!regex.test(size)) throw '[ERROR] 다리 길이는 정수여야 합니다.';
    if (size < 3 || size > 20) {
      throw '[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.';
    }
  },

  directionValidityCheck: (direction) => {
    Validator.throwErrorIfHasBlank(direction);
    if (direction !== 'U' && direction !== 'D') {
      throw '[ERROR] 대문자 U 와 D 중 하나를 입력해야 합니다.';
    }
  },

  commandValidityCheck: (command) => {
    Validator.throwErrorIfHasBlank(command);
    if (command !== 'R' && command !== 'Q') {
      throw '[ERROR] 대문자 R 과 Q 중 하나를 입력해야 합니다.';
    }
  },

  throwErrorIfHasBlank: (string) => {
    if (string.includes(' ')) {
      throw '[ERROR] 입력에 공백을 포함시킬 수 없습니다.';
    }
  },
};

module.exports = Validator;
