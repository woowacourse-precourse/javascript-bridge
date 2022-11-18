/**
 * 입력 받은 값을 유효성 검사를 진행한다.
 */

const Validator = {
  /**
   * @param {String} checkElement 유효성 검사할 요소
   * @param {Array} checkElement 유효성 검사를 진행할 리스트
   * @param {Number} minimumRange 유효성 검사를 진행할 최소 범위
   * @param {Number} maximumRange 유효성 검사를 진행할 최대 범위
   * @return {} 유효성 검사의 결과가 참이면 true 반환, 거짓이면 오류 메세지 반환한다.
   */
  /**
   * 숫자인지 확인한다.
   */
  isNumber(checkElement) {
    return /^\d+$/.test(checkElement) ? true : '[ERROR] 숫자만 입력해주세요.';
  },
  /**
   * 숫자가 범위 안에 있는지 확인한다.
   */
  isNumberInRange(checkElement, minimumRange, maximumRange) {
    return Number(checkElement) >= minimumRange && Number(checkElement) <= maximumRange
      ? true
      : `[ERROR] 범위는 ${minimumRange} ~ ${maximumRange} 사이의 숫자여야 합니다.`;
  },
  /**
   * 알파벳인지 확인한다.
   */
  isAlphabet(checkElement) {
    return /^[a-z|A-Z|]+$/.test(checkElement) ? true : '[ERROR] 영어만 입력해주세요.';
  },
  /**
   * 대문자인지 확인한다.
   */
  isUpperCase(checkElement) {
    return /^[A-Z]+$/.test(checkElement) ? true : '[ERROR] 대문자여야 합니다.';
  },
  /**
   * 리스트에 문자열이 포함되어 있는지 확인한다.
   */
  isStringInList(checkElement, checkList) {
    return checkList.includes(checkElement)
      ? true
      : `[ERROR] ${checkList.join(', ')} 중 하나로 입력해주세요.'`;
  },
};

module.exports = Validator;
