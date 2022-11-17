const Validation = {
  RESTART: "R",
  QUIT: "Q",
  validateIsNumber(number) {
    if (/\D/.test(number)) {
      throw new Error("[ERROR] 숫자만 입력해야 합니다.");
    }
  },
  validateBridgeRange(number) {
    if (number < 3 || number > 20) {
      throw new Error("[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.");
    }
  },
  validateMoveInput(input) {
    if (input !== "U" && input !== "D") {
      throw new Error("[ERROR] U 혹은 D만 입력할 수 있습니다.");
    }
  },
  validateRestartInput(input) {
    if (input !== Validation.RESTART && input !== Validation.QUIT) {
      throw new Error("[ERROR] R 혹은 Q만 입력할 수 있습니다.");
    }
  },
};

module.exports = Validation;
