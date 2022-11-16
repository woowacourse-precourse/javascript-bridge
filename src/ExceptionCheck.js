const ExceptionCheck = {
  bridgeSize(bridgeSize) {
    const numberRegEx = /[^0-9]/g;

    if (numberRegEx.test(bridgeSize))
      throw new Error("[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.");
  },
};

module.exports = ExceptionCheck;
