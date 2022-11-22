const OUTPUT_MESSAGE = Object.freeze({
  START: "다리 건너기 게임을 시작합니다.",
});

const OPTION_MESSAGE = Object.freeze({
  LENGTH: "다리의 길이를 입력해주세요.",
  MOVE: "이동할 칸을 선택해주세요. (위: U, 아래: D)",
  REGAME: "게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)",
});

module.exports(OUTPUT_MESSAGE, OPTION_MESSAGE);
