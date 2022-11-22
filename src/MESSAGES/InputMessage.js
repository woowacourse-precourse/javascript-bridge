const { DOWNUP_MESSAGE, UPDOWN_MESSAGE } = require('./BridgeMessage');

const INPUT_MESSAGE = {
  BRIDGE_INPUT: '다리의 길이를 입력해주세요.',
  BRIDGE_INPUT_ERROR: '[ERROR] 다리 길이는 3부터 20사이의 숫자여야 합니다.',
  REGAME_INPUT_ERROR: '[ERROR] 재시도는 R,종료는 Q입니다.다시 입력해주세요',
  MOVE_INPUT_ERROR: '[ERROR] 위는 U,아래는 D입니다. 다시 입력해주세요',
  UPDOWN_ERROR_MESSAGE: new Error(UPDOWN_MESSAGE),
  DOWNUP_ERROR_MESSAGE: new Error(DOWNUP_MESSAGE),
};

Object.freeze(INPUT_MESSAGE);
module.exports = INPUT_MESSAGE;
