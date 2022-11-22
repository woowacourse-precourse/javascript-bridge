const Validation = {

  bridgeSize(inputSize) {
    const sizeTest = /[^0-9]/g
    if (sizeTest.test(inputSize)) {
      throw '[ERROR] 다리 길이는 정수를 입력해야 합니다.';
    };

    if (inputSize < 3 || inputSize > 20) {
      throw '[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.';
    };
  }

};

module.exports = Validation;