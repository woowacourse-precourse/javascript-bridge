const PARAMETERS = {
  bridgeLengthRange: [3, 20],
  upControl: 'U',
  downControl: 'D',
  upCount: 1,
  downCount: 0,
  movable: 'O',
  immovable: 'X',
  separator: '|',
  space: ' ',
  restartControl: 'R',
  quitControl: 'Q',
};

const CONSOLE_MESSAGE = {
  startGame: '다리 건너기 게임을 시작합니다.\n',
  bridgeLengthInput: '다리의 길이를 입력해주세요.\n',
  moveInput: '이동할 칸을 선택해주세요. (위: U, 아래: D)\n',
  restartCheck: '게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n',
};

const RESULT_MESSAGE = {
  finalResult: '최종 게임 결과',
  success: '게임 성공 여부: 성공',
  fail: '게임 성공 여부: 실패',
  bridgeLog(arr) {
    return `[ ${arr.join(' ')} ]`;
  },
  gameCount(count) {
    return `총 시도한 횟수: ${count}`;
  },
};

const ERROR_MESSAGE = {
  invalidBridgeLength: '[ERROR] 다리 길이는 3~20 사이의 숫자를 입력해 주세요',
  invalidMove: '[ERROR] 이동할 칸은 U 또는 D 만 입력해 주세요',
  invalidRestart: '[ERROR] 재시작/종료 여부는 R 또는 Q 만 입력해 주세요',
};

module.exports = { PARAMETERS, CONSOLE_MESSAGE, RESULT_MESSAGE, ERROR_MESSAGE };
