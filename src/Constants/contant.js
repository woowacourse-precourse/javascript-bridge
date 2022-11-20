const COMMAND = {
  retry: 'R',
  quiy: 'Q',
};

const RESULT = {
  success: '성공',
  fail: '실패',
};

const BRIDGE_PARTS = {
  entrance: '[',
  exit: ']',
  pier: '|',
};

const SIGN = {
  O: 'O',
  X: 'X',
  empty_space: ' ',
};
module.exports = { COMMAND, RESULT, BRIDGE_PARTS, SIGN };
