const { UP, DOWN, RETRY, QUIT } = require('./Command');

const Message = Object.freeze({
  GAME_START: '다리 건너기 게임을 시작합니다.\n',
  BRIDGE_SIZE: '다리의 길이를 입력해주세요.\n',
  MOVING_COMMAND: `\n이동할 칸을 선택해주세요. (위: ${UP}, 아래: ${DOWN})\n`,
  GAME_COMMAND: `\n게임을 다시 시도할지 여부를 입력해주세요. (재시도: ${RETRY}, 종료: ${QUIT})\n`,
  RESULT: '최종 게임 결과\n',
  SUCCESS_OR_FAILURE: '\n게임 성공 여부: ',
  SUCCESS: '성공',
  FAILURE: '실패',
  TRY_COUNT: '\n총 시도한 횟수: ',

  map: {
    BEGINNING: '[ ',
    MIDDLE: ' | ',
    END: ' ]',
    CORRECT: 'O',
    WRONG: 'X',
    UNSELECT: ' ',
  },
});

module.exports = Message;
