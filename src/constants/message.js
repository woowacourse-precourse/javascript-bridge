const GAME_MSG = {
  START: "다리 건너기 게임을 시작합니다.",
  BRIDGE_SIZE: "\n다리의 길이를 입력해주세요.\n",
  DIRECTION: "\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n",
  RETRY: "\n게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n",
};

const ERROR_MSG = {
  RANGE: "[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.",
  DIRECTION: "[ERROR] 이동할 칸은 위: U, 아래: D로 입력해야 합니다.",
  RESTART: "[ERROR] 재시도 여부는 재시도: R, 종료: Q로 입력해야 합니다.",
};

const RESULT_MSG = {
  SUCCESS: "성공",
  FAIL: "실패",
  FINAL: "\n최종 게임 결과",
  SUCCESS_OR_FAIL: "\n게임 성공 여부: ",
  TRY_COUNT: "총 시도한 횟수: ",
};

module.exports = {
  GAME_MSG,
  ERROR_MSG,
  RESULT_MSG,
};
