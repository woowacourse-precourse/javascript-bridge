const BRIDGE = Object.freeze({
  SIZE_MIN: 3,
  SIZE_MAX: 20,
  UP: 'U',
  DOWN: 'D'
});
const PASS_RESULT = Object.freeze({
  CORRECT: 'O',
  WRONG: 'X',
  DELIMITER: ' | ',
  START: '[ ',
  END: ' ]'
});
const COMMAND = Object.freeze({
  RESTART: 'R',
  QUIT: 'Q'
});
const MESSAGE = Object.freeze({
  START: '다리 건너기 게임을 시작합니다.',
  INPUT_BRIDGE_SIZE: '\n다리 길이를 입력해주세요.\n',
  INPUT_SPACE: '\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n',
  INPUT_COMMAND: '\n게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n',
  END: '\n최종 게임 결과',
  GAME_RESULT: '\n게임 성공 여부:',
  SUCCESS: '성공',
  FAIL: '실패',
  TRY: '총 시도한 횟수:'
});

module.exports = {
  BRIDGE,
  PASS_RESULT,
  COMMAND,
  MESSAGE
};
