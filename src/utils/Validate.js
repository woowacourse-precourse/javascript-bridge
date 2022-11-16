const Validate = {
  validateSizeRange(size) {
    if (size < 3 || size > 20 || !new RegExp('^[0-9]+$').test(size)) {
      throw '[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.';
    }
    return true;
  },
};

module.exports = Validate;
