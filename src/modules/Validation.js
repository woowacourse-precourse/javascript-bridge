const Validation = {
  validateSize(size) {
    const convertInp = Number(size);
    if (Number.isNaN(convertInp)) {
      throw new Error('[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.');
    } else if (convertInp < 3 || convertInp > 20) {
      throw new Error('[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.');
    }
    return;
  },

  validateMoving(moving) {
    if (['U', 'D'].includes(moving)) {
      return;
    }
    throw new Error('[ERROR] 방향 입력은 U, D로 입력해야 합니다.');
  },

  validateCommand(command) {
    if (['R', 'Q'].includes(command)) {
      return;
    }
    throw new Error('[ERROR] 재시작 여부는 R, Q로 입력해야 합니다.');
  },
};

module.exports = Validation;
