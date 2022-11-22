const Constants = {
  Input: {
    BRIDGE_SIZE: `다리의 길이를 입력해주세요.\n`,
    MOVE: `이동할 칸을 선택해주세요. (위: U, 아래: D)\n`,
    GAME_COMMAND: `게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n`,
  },
  Output: {
    FINAL_RESULT: `최종 게임 결과`,
    SUCCESS_OR_FAILURE: `게임 성공 여부:`,
    NUMBER_OF_TRY: `총 시도한 횟수:`,
  },
  Error: {
    NUMBER: `[ERROR] 숫자여야 합니다.`,
    BRIDGE: `[ERROR] 다리의 길이는 3이상 20이하여야 합니다.`,
    UP_OR_DOWN: `[ERROR] 위 칸은 U, 아래 칸은 D 입니다.`,
    GAME_COMMAND: `[ERROR] 재시작은 R, 종료는 Q 입니다. `,
  },
  Result: {
    SUCCESS: 'success',
    FAIL: 'fail',
    DONE: 'done',
  },
};

module.exports = Constants;
