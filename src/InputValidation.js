const InputVaildation = {
  ofBridgeLength(bridgeLength) {
    const regExag = /(^[3-9]{1}$|^[1]{1}[0-9]{1}$|^20$)/g;
    if (!regExag.test(bridgeLength)) {
      throw new Error('[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.');
    }

  },
};

module.exports = InputVaildation;
