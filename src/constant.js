const MESSAGE =Object.freeze({
  START: '다리 건너기 게임을 시작합니다.',
  BRIDGE_SIZE:'다리의 길이를 입력해주세요.',
  MOVE_MESSAGE:'이동할 칸을 선택해주세요. (위: U, 아래: D)',
  RESTART_MESSAGE:'게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)',
});

const KEY=Object.freeze({
  MOVE_UP:'U',
  MOVE_DOWN:'D',
  RESTART:'R',
  END:'Q',
});

const ERROR=Object.freeze({
  BRIDGE_ERROR : '[ERROR]다리 길이가 올바르지 않습니다.',
  MOVING_ERROR : '[ERROR]이동할 칸이 올바르지 않습니다.',
  RESTART_ERROR : '[ERROR]재시작 입력이 올바르지 않습니다.',
})

const RESULT_MESSAGE=Object.freeze({
  SUCCESS : '게임 성공 여부: 성공',
  FAIL : '게임 성공 여부: 실패',
  MATCH : '총 시도한 횟수:',
  RESULT : '최종 게임 결과',
})

const UTILS=Object.freeze({
  BLANK : ' ',
  WALL : ' | ',
  PASS : 'O',
  STOP : 'X',
  BRIDGE_MIN : 3,
  BRIDGE_MAX : 20,
})
const OUTPUT_MESSAGES =Object.freeze ({
  PRINT_RESULT: 'printResult',
  PRINT_MAP: 'printMap',
  READ_MOVING: 'readMoving',
  READ_GAME_COMMAND: 'readGameCommand',
})

module.exports=Object.freeze({
  MESSAGE,
  KEY,
  ERROR,
  RESULT_MESSAGE,
  UTILS,
  OUTPUT_MESSAGES,
});