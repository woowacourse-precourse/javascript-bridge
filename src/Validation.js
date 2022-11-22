const Validate = {
  sizeInput(input) {
    const USER_NUMBER = Number(input);
    if (USER_NUMBER < 3 || USER_NUMBER > 20) {
      throw new Error('[ERROR] 공백없이 3 ~ 20 사이의 숫자를 입력 해주세요.');
    }
    if (Number.isNaN(USER_NUMBER)) {
      throw new Error('[ERROR] 다리 길이는 숫자로 입력해 주세요.');
    }
  },

  moveInput(input) {
    if (input !== 'U' && input !== 'D') {
      throw new Error('[ERROR] 이동할 칸은 U 또는 D로 입력 하셔야 합니다.');
    }
  },

  retryQuitInput(input) {
    if (input !== 'R' && input !== 'Q') {
      throw new Error('[ERROR] 재시작 하려면 R, 종료하려면 Q를 입력하셔야 합니다.');
    }
  },
};

module.exports = Validate;
