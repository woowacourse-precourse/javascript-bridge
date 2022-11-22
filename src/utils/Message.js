const MESSAGE = {
  io: {
    start: '다리 건너기 게임을 시작합니다.\n',
    bridgeLength: '다리의 길이를 입력해주세요.\n',
    move: '\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n',
    restart:
      '\n게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n',
    end: '\n최종 게임 결과',
    result: '\n게임 성공 여부:',
    totalNumber: '총 시도한 횟수:',
  },
  error: {
    bridge: {
      type: '숫자만 입력 가능합니다.',
      length: '다리 길이는 3부터 20 사이의 숫자여야 합니다.',
    },
    move: 'U또는 D만 입력 가능합니다.',
    restart: 'R또는 Q만 입력 가능합니다.',
  },
};

module.exports = MESSAGE;
