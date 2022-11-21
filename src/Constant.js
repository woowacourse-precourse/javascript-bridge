const INPUT_MESSAGE = {
  BRIDGE_SIZE: '다리의 길이를 입력해주세요.\n',
  READ_MOVE: '\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n',
  READ_GAME_COMMAND:
    '게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n',
};

const START_MESSAGE = '다리 건너기 게임을 시작합니다.\n';

const OUTPUT_MESSAGE = {
  RESULT: '\n최종 게임 결과\n',
  SUCCESS: '게임 성공 여부: 성공',
  FAIL: '게임 성공 여부: 실패',
  COUNT_TRY: '총 시도한 횟수: ',
};

const ERROR_MESSAGE = {
  SIZE_ERROR: '[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.',
  MOVE_ERROR: '[ERROR] 이동할 칸은 U 또는 D여야 합니다.',
  RESTART_ERROR: '[ERROR] 게임 재시작 여부는 R 또는 Q여야 합니다.',
};

module.exports = {
  START_MESSAGE,
  INPUT_MESSAGE,
  OUTPUT_MESSAGE,
  ERROR_MESSAGE,
};
