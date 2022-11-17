//받은 입력이 예외인지 확인한 후, 적절한 자료형의 값으로 바꾸어 리턴한다.

const InputToValue = {
  returnBridgeSize(userInput) {
    //예외 처리 필요
    return parseInt(userInput);
  },

  returnMovingCommand(userInput) {
    //예외 처리 필요
    return userInput;
  },

  returnGameCommand(userInput) {
    //예외 처리 필요
    return userInput;
  },
};

module.exports = InputToValue;
