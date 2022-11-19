const IsValid = {
  bridgeSize(length) {
    if (!Number(length)) {
      throw new Error('[ERROR] 다리 길이는 숫자여야 합니다.');
    }
    if (Number(length) < 3 || Number(length) > 20) {
      throw new Error('[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.');
    }
    return true;
  },
};

module.exports = IsValid;
