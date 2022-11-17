const Validate = {
  bridgeSizeValidate(size) {
    if (!Number(size) || Number(size) < 3 || Number(size) > 20) throw new Error('[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.');
  },
  moveValidate(move) {
    if (move === 'U') return;
    if (move === 'D') return;
    throw new Error('[ERROR] 이동할 칸은 U 또는 D만 입력할 수 있습니다.');
  },
  commandValidate() {},
};
module.exports = Validate;
