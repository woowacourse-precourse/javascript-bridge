const MESSAGE = {
  START: '다리 건너기 게임을 시작합니다.',
  INPUT: {
    BRIDGE_SIZE: '다리의 길이를 입력해주세요.',
    MOVE: (up, down) => `이동할 칸을 선택해주세요. (위: ${up}, 아래: ${down})`,
    RESTART_OR_QUIT: (restart, quit) =>
      `게임을 다시 시도할지 여부를 입력해주세요. (재시도: ${restart}, 종료: ${quit})`,
  },
};

module.exports = MESSAGE;
