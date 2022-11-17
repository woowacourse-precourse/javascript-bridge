const QUESTION = Object.freeze({
  BRIDGE_SIZE: "다리의 길이를 입력해주세요.",
  MOVE_KEY: "이동할 칸을 선택해주세요. (위: U, 아래: D)",
  COMMAND_KEY: "게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)",
});

const PRINT = Object.freeze({
  START_GAME: "다리 건너기 게임을 시작합니다.",
  FINISH_GAME: "최종 게임 결과",
  SUCCESS_GAME: "게임 성공 여부: 성공",
  FAIL_GAME: "게임 성공 여부: 실패",
  TOTAL_TRY: "총 시도한 횟수: ",
});

const ERR = Object.freeze({
  NOT_NUMBER: "[ERROR] 숫자만 입력해주세요",
  WRONG_BRIDGE_SIZE: "[ERROR] 다리의 길이는 3~20 사이여야 합니다.",
  WRONG_MOVE_KEY: "[ERROR] 이동할 칸은 U 혹은 D 중에 입력해야합니다.",
  WRONG_COMMAND_KEY: "[ERROR] 게임 진행은 R 혹은 Q 중에 입력해야합니다.",
});

const KEY = Object.freeze({
  UP: "U",
  DOWN: "D",
  RETRY: "R",
  QUIT: "Q",
});

module.exports = {
  QUESTION,
  PRINT,
  ERR,
  KEY,
};
