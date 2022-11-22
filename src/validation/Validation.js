const Validation = {
  validateBridgeSize(size) {
    if (isNaN(size)) return { error: `\n[ERROR] 숫자만 입력가능합니다.\n` };
    if (size < 3 || size > 20)
      return { error: `\n[ERROR] 입력 가능 범위는 3이상 20이하입니다.` };
    if (!Number.isInteger(Number(size)))
      return { error: `\n[ERROR] 정수만 입력가능합니다.\n` };
    return { error: "[ERROR] undefined" };
  },

  validateUpsideDown(upsideDown) {
    if (upsideDown === "U" || upsideDown === "D")
      return { error: "[ERROR] undefined" };
    return { error: `\n[ERROR] "U" 또는 "D"만 입력가능합니다.` };
  },

  validateRetryQuit(retryQuit) {
    if (retryQuit === "R" || retryQuit === "Q")
      return { error: "[ERROR] undefined" };
    return { error: `\n[ERROR] "R" 또는 "Q"만 입력가능합니다.` };
  },
};

module.exports = Validation;
