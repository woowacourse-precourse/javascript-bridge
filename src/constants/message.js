const MESSAGE = {
  GAME: {
    START: '다리 건너기 게임을 시작합니다.\n',
    INPUT: '다리의 길이를 입력해주세요\n',
    MOVE: '이동할 칸을 선택해주세요. (위: U, 아래: D)\n',
    RETRY: '게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n',
  },
  ERROR: {
    SIZE: '[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.\n',
    MOVE: '[ERROR] 이동할 칸은 U또는 D여야 합니다.\n',
    RETRY: '[ERROR] 재시작/종료 여부는 R또는 Q여야 합니다.\n',
  },
};

module.exports = MESSAGE;
