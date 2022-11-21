const Constants = {
  Input: {
    bridgeSize: `다리의 길이를 입력해주세요.\n`,
    move: `이동할 칸을 선택해주세요. (위: U, 아래: D)\n`,
    gameCommand: `게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n`,
  },

  Error: {
    number: `[ERROR] 숫자여야 합니다.`,
    bridge: `[ERROR] 다리의 길이는 3이상 20이하여야 합니다.`,
    upOrDown: `[ERROR] 위 칸은 U, 아래 칸은 D 입니다.`,
    gameCommand: `[ERROR] 재시작은 R, 종료는 Q 입니다. `,
  },
};

module.exports = Constants;
