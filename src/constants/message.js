const MESSAGE = {
  GAME: {
    START: '다리 건너기 게임을 시작합니다.\n',
    INPUT: '다리의 길이를 입력해주세요\n',
    MOVE: '\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n',
    RETRY: '\n게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n',
    RESULT: '\n최종 게임 결과',
    SUCCESS: '\n게임 성공 여부: ',
    TRY: '총 시도한 횟수: ',
  },
  ERROR: {
    SIZE: '[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.\n',
    MOVE: '[ERROR] 이동할 칸은 U또는 D여야 합니다.\n',
    RETRY: '[ERROR] 재시작/종료 여부는 R또는 Q여야 합니다.\n',
  },
};

module.exports = MESSAGE;
