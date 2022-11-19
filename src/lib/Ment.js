const GAME = {
  START: "다리 건너기 게임을 시작합니다.",
  SUCCESS_END: "게임 성공 여부: 성공",
  FAILURE_END: "게임 성공 여부: 실패",
  ALL_RETRY_COUNT: (count) => {
    `총 시도한 횟수: ${count}`;
  },
};

const INPUT = {
  BRIDGE_SIZE: "다리의 길이를 입력해주세요.",
  BRIDGE_MOVE: "이동할 칸을 선택해 주세요. (위: U, 아래: D)",
  GAME_RETRY: "게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q",
};

module.exports = { GAME, INPUT };
