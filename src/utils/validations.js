const validateBridgeSize = (size) => {
  if (3 > size || size > 20) {
    const MESSAGE = '다리 길이는 3부터 20 사이의 숫자여야 합니다.';
    throw MESSAGE;
  }
  return true;
};

const validateUserPosition = (position) => {
  if (position === 'U' || position == 'D') return true;
  const TYPO_ERROR = 'U 또는 D를 입력하여 이동할 수 있습니다.';
  throw TYPO_ERROR;
};

const validateRetryAnswer = (answer) => {
  if (answer === 'Q' || answer == 'R') return true;
  const MESSAGE = '게임을 끝내려면 Q를 재시도하려면 R을 입력해주세요.';
  throw MESSAGE;
};

module.exports = {
  validateBridgeSize,
  validateUserPosition,
  validateRetryAnswer,
};
