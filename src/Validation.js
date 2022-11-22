const Validation = {

  bridgeSize(inputSize) {
    const sizeTest = /[^0-9]/g
    if (sizeTest.test(inputSize)) {
      throw '[ERROR] 다리 길이는 정수를 입력해야 합니다.';
    };

    if (Number(inputSize) < 3 || Number(inputSize) > 20) {
      throw '[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.';
    };
  },

  moving(inputMoving) {
    if (inputMoving !== "U" && inputMoving !== "D") {
      throw '[ERROR] 이동할 칸은 U와 D 중 하나로 입력해야 합니다.'
    }
  },

  readCommand(inputCommand) {
    if (inputCommand !== "R" && inputCommand !== "Q") {
      throw '[ERROR] 다시 시도할지 여부는 R과 Q 중 하나로 입력해야 합니다.'
    }
  },

};

module.exports = Validation;