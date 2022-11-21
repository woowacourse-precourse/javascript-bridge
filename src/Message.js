const OUTPUT_MESSAGE = Object.freeze({
  START: '다리 건너기 게임을 시작합니다.',
  BRIDGE_SIZE: '\n다리의 길이를 입력해주세요.\n',
  MOVING: '\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n',
});

const ERROR_MESSAGE = Object.freeze({
  BRIDGE_SIZE: `[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.`,
  MOVING: `[ERROR] 이동할 칸은 U(위 칸)와 D(아래 칸) 중 하나의 문자여야 합니다.`,
});

const RESULT_MESSAGE = Object.freeze({
  GAME_RESULT: `\n최종 게임 결과`,
  IS_SUCCESS: `\n게임 성공 여부: `,
  TOTAL_TRY: `총 시도한 횟수: `,
});

module.exports = { OUTPUT_MESSAGE, ERROR_MESSAGE, RESULT_MESSAGE };
