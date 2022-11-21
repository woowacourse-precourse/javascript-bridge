const Exception = {

  /**
   * 다리 길이가 유효한지 체크
   * @param {string} size 다리의 길이
   */
  checkVaildBridgeSize(size) {
    if (Number(size) < 3 || Number(size) > 20) {
      throw new Error("[ERROR] 다리의 길이는 3부터 20 사이의 숫자여야 합니다.");
    }
  },

};

module.exports = Exception;
