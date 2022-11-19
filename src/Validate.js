const IS_NOT_NUMBER = /([^0-9])/g

/**
 * 예외사항에 대한 처리를 하는 기능을 한다.
 */
const Validate = {
  /**
   * @param {사용자의 입력하는 다리 크기} inputBridgeSize 
   * @returns 만약 입력한 값이 3보다 작거나 45보다 큰 경우, 입력한 곳에 숫자 이외의 문자가 존재하는 경우 false를 반환한다.
   */
  isValidateInputBridgeSize(inputBridgeSize) {
    switch (true) {
      case IS_NOT_NUMBER.test(inputBridgeSize):
        return true;
      case inputBridgeSize < 3 || inputBridgeSize > 45:
        return true;
      default:
        return false;
    }
  },

  isValidateInputMoveDirection(inputMoveDirection) {
    switch (true) {
      case inputMoveDirection === 'D' || inputMoveDirection === 'U':
        return false;
      default:
        return true;
    }
  }
}

module.exports = Validate;
