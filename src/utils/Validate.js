const Validate = {
  validateSizeRange(size) {
    if (size < 3 || size > 20 || !new RegExp('^[0-9]+$').test(size)) {
      throw new Error('[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.');
    }
    return true;
  },

  validateMovePosition(movePosition) {
    if (movePosition !== 'U' && movePosition !== 'D') {
      throw new Error('[ERROR] 이동할 칸은 위 : U 또는 아래 : D인 문자로 입력해주세요.');
    }
    return true;
  },
};

module.exports = Validate;
