const BRIDGE = {
  LENGTH:{
    MIN:3,
    MAX:20,
  },
};

const MESSAGE = {
  START: '다리 건너기 게임을 시작합니다.\n',
  INPUT:{
    SIZE: '다리의 길이를 입력해주세요.\n',
    MOVE: '\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n',
    COMMAND: '\n게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n',
  },
  ERROR:{
    SIZE: `[ERROR] 다리 길이는 ${BRIDGE.LENGTH.MIN} 부터 ${BRIDGE.LENGTH.MAX} 사이의 숫자여야 합니다.`,
    MOVE: `[ERROR] 위 칸으로 이동하려면 대문자 "U", 아래 칸으로 이동하려면 대문자 "D"를 입력해주세요.`,
  },
}

module.exports = {
  MESSAGE: MESSAGE,
  BRIDGE: BRIDGE,
};