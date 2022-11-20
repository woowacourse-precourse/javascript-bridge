const MESSAGE = {
  ANNOUNCE: {
    START: '다리 건너기 게임을 시작합니다.\n',
    INPUT_SIZE: '다리의 길이를 입력해주세요.\n',
    INPUT_MOVE: '\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n',
    INPUT_RETRY: '\n게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n',
  },
  RESULT: {
    TITLE: '\n최종 게임 결과',
    SUCESS: '\n게임 성공 여부: ',
    TRY: '총 시도한 횟수: ',
  },
  ERROR: {
    BRIDGE_SIZE_RANGE: '\n[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.',
    BRIDGE_SIZE_EMPTY: '\n[ERROR] 다리 길이를 입력하셔야 합니다.',
    BRIDGE_MOVE: '\n[ERROR] 이동하실 방향은 (위: U, 아래: D)만을 입력하셔야 합니다.',
    BRIDGE_MOVE_EMPTY: '\n[ERROR} 이동하실 방향 위: U, 아래: D)에 대해 입력하셔야 합니다.',
    BRIDGE_MOVE_OVER: '\n[ERROR] 한번에 한칸에 대한 명령(위: U, 아래: D)만을 입력하셔야 합니다.',
    BRIDGE_GAME_COMMAND: '\n[ERROR] 게임을 다시 시도할지 여부는 (재시도: R, 종료: Q)만을 입력하셔야 합니다.',
    BRIDGE_GAME_COMMAND_EMPTY: '\n[ERROR] 게임을 다시 시도할지 여부 (재시도: R, 종료: Q)를 입력하셔야 합니다.',
  },
};

module.exports = MESSAGE;
