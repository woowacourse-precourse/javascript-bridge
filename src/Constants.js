const MESSAGE = Object.freeze({
  READ_BRIDGE_SIZE: '다리의 길이를 입력해주세요.\n',
  READ_MOVING: '이동할 칸을 선택해주세요. (위: U, 아래: D)\n',
  READ_GAME_COMMAND: '게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n',
  GAME_START: '다리 건너기 게임을 시작합니다.\n',
  FINAL_RESULT: '최종 게임 결과\n',
  IS_COMPLETED: '게임 성공 여부: ',
  COMPLETE: '성공\n',
  FAIL: '실패\n',
  NUMBER_OF_TRIES: '총 시도한 횟수: ',
});

const PAD = Object.freeze({
  CORRECT_PAD: 'O',
  WRONG_PAD: 'X',
  NON_EXISTANT_PAD: ' ',
  UP: 'U',
  DOWN: 'D',
});

const COMMAND = Object.freeze({
  RETRY: 'R',
  QUIT: 'Q',
});

const ERROR = Object.freeze({
  BRIDGE_SIZE_MUST_BE_NUMBER: '[ERROR] 다리 길이는 자연수여야 합니다.\n',
  BRIDGE_SIZE_MUST_BE_3_TO_20: '[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.\n',
  MOVING_MUST_BE_ONE_LETTER: '[ERROR] 이동할 방향은 1글자로만 입력해야 합니다.\n',
  MOVING_MUST_BE_U_OR_D: '[ERROR] 이동할 방향은 U 혹은 D으로만 입력해야 합니다.\n',
  COMMAND_MUST_BE_ONE_LETTER: '[ERROR] 다시 시도 여부는 1글자로만 입력해야 합니다.\n',
  COMMAND_MUST_BE_U_OR_D: '[ERROR] 다시 시도 여부는 R 혹은 Q로만 입력해야 합니다.\n',
});

const BRIDGE = Object.freeze({
  START: '[ ',
  END: ' ]\n',
  SEPERATOR: ' | ',
});

const GAME = Object.freeze({
  COMPLETE: true,
  FAIL: false,
});

module.exports = Object.freeze({
  MESSAGE,
  PAD,
  COMMAND,
  ERROR,
  BRIDGE,
  GAME,
});