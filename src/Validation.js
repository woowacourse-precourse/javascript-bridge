const { errorMessage } = require("./constant/message.js");

const Validation = {
  /**
   * @param {number} start : 범위의 시작값에 해당하는 숫자
   * @param {number} end : 범위의 끝값에 해당하는 숫자
   * @param {number} number : 식별의 대상이 되는 숫자
   * @return {boolean}
   */
  isSame(elem1, elem2) {
    return elem1 === elem2;
  },
  isDifferent(elem1, elem2) {
    return !this.isSame(elem1, elem2);
  },
  isInRange(start, end, number) {
    if (end < start) throw new Error(errorMessage.END_EXCEED_START);
    if (number < start || number > end) return false;
    return true;
  },

  /**
   * @param {string} length : 다리의 길이 값
   * @returns {number}
   */
  validateBridgeLength(length) {
    if (isNaN(length)) {
      throw new Error(errorMessage.BETWEEN_NUMBER);
    }
    const parsedLength = parseInt(length, 10);
    if (!this.isInRange(2, 20, parsedLength)) {
      throw new Error(errorMessage.OUT_OF_RANGE);
    }
    return parsedLength;
  },

  /**
   * @param {string} command : 확인이 필요한 문자열
   * @param {string[]} permission : 허가하는 문자열
   * @return {string}
   */
  validateCommand(command, permission) {
    if (!permission.includes(command)) {
      throw new Error(errorMessage.NOT_ALLOWED);
    }
    return command;
  },
  validateSucess(answer, inputs) {
    for (let i = 0; i < answer.length; i++) {
      if (answer[i] !== inputs[i]) return "실패";
    }
    return "성공";
  },
};

module.exports = Validation;
