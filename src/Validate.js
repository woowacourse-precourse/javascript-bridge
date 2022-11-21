const Validate = {
  size(size) {
    const number = /^(0|[-]?[1-9]\d*)$/.test(size) || typeof size === 'number';
    const length = size <= 20 && size >= 3;

    if (!length || !number) {
      throw new Error('[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.');
    }
  },

  move(move) {
    if (move !== 'U' && move !== 'D') {
      throw new Error(
        '[ERROR] 이동할 칸은 U(위 칸)와 D(아래 칸) 중 하나의 문자를 입력해야 합니다.\n',
      );
    }
  },
};

module.exports = Validate;
