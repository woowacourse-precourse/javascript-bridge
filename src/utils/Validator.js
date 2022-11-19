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

  direction(command) {
    if (command !== 'U' && command !== 'D') {
      throw new Error('[ERROR] U(위 칸)와 D(아래 칸) 중 하나의 문자만 입력할 수 있습니다.');
    }
    return true;
  },
};

module.exports = IsValid;
