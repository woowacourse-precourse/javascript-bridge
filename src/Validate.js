const Validate = {
  checkSizeInputType(inputNumber) {
    if (Number.isNaN(Number(inputNumber))) {
      throw new Error("[ERROR] 다리 길이는 숫자로 입력해야 합니다.");
    }
  },

  checkSizeInputRange(inputNumber) {
    if (Number(inputNumber) < 3 || Number(inputNumber) > 20) {
      throw new Error("[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.");
    }
  },

  checkDirectionInputType(inputDirection) {
    if (inputDirection !== "U" && inputDirection !== "D") {
      throw new Error("[ERROR] 이동 경로는 U 아님 D로 입력해야 합니다.");
    }
  },

  checkRetryCommandType(inputOpinion) {
    if (inputOpinion !== "R" && inputOpinion !== "Q") {
      throw new Error("[ERROR] 재시작은 R, 게임 종료는 Q를 눌러주세요.");
    }
  },
};

module.exports = Validate;
