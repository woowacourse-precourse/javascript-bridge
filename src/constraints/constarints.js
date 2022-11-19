const MESSAGES = {
  START: "다리 건너기 게임을 시작합니다.",
  READ_BRIDGE_SIZE: "다리의 길이를 입력해주세요.",
  MOVE: "이동할 칸을 선택해주세요. (위: U, 아래: D)",
  RETRY: "게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)",
  RESULT: {
    FINAL: "최종 게임 결과",
    TRY: "총 시도한 횟수: ",
    IS_SUCCEED: {
      true: "게임 성공 여부: 성공",
      false: "게임 성공 여부 : 실패",
    },
  },
  EXCEPTIONS: {
    BRIDGE: {
      COUNT_EXCEPTION: "[ERROR] 다리 길이의 입력 값을 1개만 입력해주세요.",
      TYPE_EXCEPTION: "[ERROR] 다리 길이의 입력 값은 정수여야 합니다.",
      RANGE_EXCEPTION: "[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.",
    },
    RANDOM: {
      VALUE_EXCEPTION: "[ERROR] 무작위 값이 0 또는 1이 아닙니다.",
    },
    MOVE: {
      LENGTH_EXCEPTION: "[ERROR] 한 개의 문자만 입력해주세요.",
      VALUE_EXCEPTION: "[ERROR] 입력된 문자가 U 또는 D가 아닙니다.",
    },
    RETRY: {
      LENGTH_EXCEPTION: "[ERROR] 한 개의 문자만 입력해주세요.",
      VALUE_EXCEPTION: "[ERROR] 입력된 문자가 R 또는 Q가 아닙니다.",
    },
  },
};

module.exports = { MESSAGES };
