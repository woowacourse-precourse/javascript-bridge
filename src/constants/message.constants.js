const INPUT_MESSAGE = Object.freeze({
  BRIDGE_SIZE: '다리의 길이를 입력해주세요.\n',
  MOVEMENT: '이동할 칸을 선택해주세요. (위: U, 아래: D)\n',
  RESTART_OR_QUIT: '게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n',
});

const OUTPUT_MESSAGE = Object.freeze({
  START_GAME: '다리 건너기 게임을 시작합니다.\n',
  FINAL: '최종 게임 결과',
  TOTAL_RESULT: (gameResult, gameCount) => `게임 성공 여부: ${gameResult}\n총 시도한 횟수: ${gameCount}`,
});

const GAME_RESULT = Object.freeze({
  SUCCESS: '성공',
  FAIL: '실패',
});

module.exports = {
  INPUT_MESSAGE,
  OUTPUT_MESSAGE,
  GAME_RESULT,
};
