const MESSAGE = {
  io: {
    start: '다리 건너기 게임을 시작합니다.\n',
    bridgeLength: '다리의 길이를 입력해주세요.\n',
    move: '\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n',
  },
  error: {
    bridge: {
      type: '숫자만 입력 가능합니다.',
      length: '다리 길이는 3부터 20 사이의 숫자여야 합니다.',
    },
    move: 'U또는 D만 입력 가능합니다.',
  },
};

module.exports = MESSAGE;
