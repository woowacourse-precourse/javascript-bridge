const Validation = {
  checkBridgeSize(size) {
    if (isNaN(size)) throw new Error('\n[ERROR] 숫자만 입력할 수 있습니다.\n');

    if (size < 3 || size > 20)
      throw new Error(
        '\n[ERROR] 3 이상 20 이하의 숫자만 입력할 수 있습니다.\n'
      );

    if (!Number.isInteger(Number(size)))
      throw new Error('\n[ERROR] 정수만 입력할 수 있습니다.\n');
  },

  checkDirection(direction) {
    if (direction === 'U' || direction === 'D') return;

    throw new Error('\n[ERROR] U 또는 D만 입력할 수 있습니다.');
  },

  checkCommandOption(commandOption) {
    if (commandOption === 'R' || commandOption === 'Q') return;

    throw new Error('\n[ERROR] R 또는 Q만 입력할 수 있습니다.');
  },
};

module.exports = Validation;
