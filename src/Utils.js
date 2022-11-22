const utils = {
  /**
   * 형식에 맞는 에러객체 반환하는 메서드
   * @param {string} msg 출력할 메시지
   * @returns {Error} 에러객체
   */
  error(msg) {
    return new Error(`[ERROR] ${msg}`);
  },
  /**
   * 숫자인지 판별하는 메서드
   * @param {*} number 숫자인지 판별할 대상
   * @returns {boolean} 숫자일 경우 true
   */
  isNumber(number) {
    return !Number.isNaN(number) && typeof number === "number";
  },
};
module.exports = utils;
