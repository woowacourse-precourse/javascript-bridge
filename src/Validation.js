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
  isInRange(start, end, number) {
    if (number < start || number > end) return false;
    return true;
  },

  /**
   * @param {string} length : 다리의 길이 값
   * @returns {number}
   */
  validateBridgeLength(length) {
    if (isNaN(length)) {
      throw new Error("[ERROR] 2~20 사이의 숫자를 입력해 주세요");
    }
    const parsedLength = parseInt(length, 10);
    if (!this.isInRange(2, 20, parsedLength)) {
      throw new Error("[ERROR] 입력할 수 있는 숫자의 범위를 초과하였습니다.");
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
      throw new Error("[ERROR] 허용되지 않은 문자열입니다.");
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
