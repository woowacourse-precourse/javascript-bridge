const ERROR = "[ERROR]";
const NEW_LINE = "\n";

const MESSAGE = Object.freeze({
  gameStart: "다리 건너기 게임을 시작합니다.",
  finalResult: "최종 게임 결과",
  winOrLose: "게임 성공 여부: ",
  win: "성공",
  lose: "실패",
  trialTime: "총 시도한 횟수: ",
});

const INPUT_MESSAGE = Object.freeze({
  numberOfBridge: "다리의 길이를 입력해주세요." + NEW_LINE,
  chooseUpOrDown: "이동할 칸을 선택해주세요. (위: U, 아래: D)" + NEW_LINE,
  chooseToRetry:
    "게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)" + NEW_LINE,
});

const ERROR_MESSAGE = Object.freeze({
  notInRange: `${ERROR} 다리 길이는 3부터 20 사이의 숫자여야 합니다.`,
  notUorD: `${ERROR} U(위)와 D(아래) 이외는 입력할 수 없습니다.`,
  notRorQ: `${ERROR} R(재시도)와 Q(종료) 이외는 입력할 수 없습니다.`,
});

const NUMBER_RANGE = Object.freeze({
  min: 3,
  max: 20,
});

const LETTER = Object.freeze({
  up: "U",
  down: "D",
  retry: "R",
  quit: "Q",
  correct: "O",
  wrong: "X",
});

const BRIDGE_MAP = Object.freeze({
  0: "D",
  1: "U",
});

module.exports = {
  MESSAGE,
  ERROR_MESSAGE,
  INPUT_MESSAGE,
  LETTER,
  BRIDGE_MAP,
  NUMBER_RANGE,
  NEW_LINE,
};
