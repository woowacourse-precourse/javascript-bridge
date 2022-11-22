/**
 * 유효성 검증 함수
 * 유효성 통과 실패시 에러 발생 및 에러메시지 전달
 */
const InputValidate =  {
  /**
   * 다리 길이 입력값 유효성 검정
   * @param {char} bridgeLengthInput 다리 길이 입력값
   * step 1: 입력값은 숫자로만 이루어져야 한다.
   * step 2: 입력값은 3이상 20이하인 수여야 한다.
   */
  validateBridgeLength(bridgeLengthInput) {
    if(!bridgeLengthInput.match(/^[0-9]+$/g)) {
      throw new Error("[ERROR] 다리 길이는 숫자(정수)를 입력해야 합니다.");
    } else if(parseInt(bridgeLengthInput)>20 || parseInt(bridgeLengthInput)<3) {
      throw new Error("[ERROR] 다리 길이는 3이상 20이하의 수를 입력해야 합니다.");
    }
  },

  /**
   * 위/아래 방향 입력값 유효성 검정
   * @param {char} directionInput 위/아래 방향 입력값
   * step 1: 입력값은 'U' 혹은 'D' 여야 한다.
   */
  validateDirection(directionInput) {
    if (!['U','D'].includes(directionInput)) {
      throw new Error("[ERROR] U 혹은 D를 입력해야 합니다.");
    }
  },

  /**
   * 재시도 여부 입력값 유효성 검정
   * @param {char} retryInput 재시도 여부 입력값
   * step 1: 입력값은 'R' 혹은 'Q' 여야 한다.
   */
  validateRetry(retryInput) {
    if (!['R','Q'].includes(retryInput)) {
      throw new Error("[ERROR] R 혹은 Q를 입력해야 합니다.");
    }
  }
}

module.exports = InputValidate;