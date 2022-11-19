const isBridgeSizeValid = (number) => {
  const num = Number(number);
  if (Number.isNaN(number)) {
    throw new Error('[ERROR] 입력 값이 숫자여야 합니다.');
  }
  if (num < 3 || num > 20) {
    throw new Error('[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.');
  }
};
module.exports = { isBridgeSizeValid };
