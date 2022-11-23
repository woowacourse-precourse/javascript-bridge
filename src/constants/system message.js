const COMMAND = require('./command');

const SYSTEM_MESSAGE = Object.freeze({
  START: '다리 건너기 게임을 시작합니다.\n',
  INPUT_SIZE: '다리의 길이를 입력해주세요.\n',
  INPUT_MOVE: `\n이동할 칸을 선택해주세요. (위: ${COMMAND.UP}, 아래: ${COMMAND.DOWN})\n`,
  RESTART: `\n게임을 다시 시도할지 여부를 선택해주세요. (재시도: ${COMMAND.REPLAY}, 종료: ${COMMAND.QUIT})\n`,
  RESULT: '\n최종 게임 결과',
  IS_SUCCESS: '\n게임 성공 여부: ',
  TRY_COUNT: '총 시도한 횟수: ',
  SUCCESS: '성공',
  FAIL: '실패',
});

module.exports = SYSTEM_MESSAGE;
