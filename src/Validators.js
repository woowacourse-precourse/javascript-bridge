const Validators = {
  isValidLength: (length) => {
    if (!length) throw new Error('[ERROR] 다리 길이를 입력해주세요.');
    if (Number(length) < 3 || Number(length > 20) || isNaN(length))
      throw new Error('[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.');
  },
  isValidMove: (move) => {
    if (!move) throw new Error('[ERROR] 이동할 칸을 입력해주세요.');
    if (move !== 'U' && move !== 'D')
      throw new Error(
        '[ERROR] U(위 칸)와 D(아래 칸) 중 하나의 문자를 입력할 수 있습니다.'
      );
  },
  isValidCommand: (command) => {
    if (!command)
      throw new Error('[ERROR] 게임을 다시 시도할지 여부를 입력해주세요.');
    if (command !== 'R' && command !== 'Q')
      throw new Error(
        '[ERROR] R(재시도)와 Q(종료) 중 하나의 문자를 입력할 수 있습니다.'
      );
  },
};

module.exports = Validators;
