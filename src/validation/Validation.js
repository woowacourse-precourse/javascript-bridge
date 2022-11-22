const Validation = {
  validateBridgeSize(size) {
    if (isNaN(size)) return { error: `\n[ERROR] 숫자만 입력가능합니다.\n` };
    if (size < 3 || size > 20)
      return { error: `\n[ERROR] 입력 가능 범위는 3이상 20이하입니다.` };
  },
};

module.exports = Validation;
