const OutputView = require('../Views/OutputView');

const validateBridgeSize = (size) => {
  const NOT_NUM = '숫자로 입력해주세요.';
  const MESSAGE = '다리 길이는 3부터 20 사이의 숫자여야 합니다.';
  if (!Number(size)) throw NOT_NUM;
  if (3 > size || size > 20) throw MESSAGE;
  return true;
};

const validateUserPosition = (position) => {
  const TYPO_ERROR = 'U 또는 D를 입력하여 이동할 수 있습니다.';
  if (!(position === 'U' || position == 'D'))
    throw OutputView.printError(TYPO_ERROR);
  return true;
};

const validateRetryAnswer = (answer) => {
  const RETRY_MESSAGE = '게임을 끝내려면 Q를 재시도하려면 R을 입력해주세요.';
  if (!(answer === 'Q' || answer == 'R'))
    throw OutputView.printError(RETRY_MESSAGE);
  return true;
};

module.exports = {
  validateBridgeSize,
  validateUserPosition,
  validateRetryAnswer,
};
