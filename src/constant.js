const ERROR = "[ERROR]";

const MESSAGE = Object.freeze({
  gameStart: "다리 건너기 게임을 시작합니다.",
  finalResult: "최종 게임 결과",
  winOrLose: "게임 성공 여부: ",
  win: "성공",
  lose: "실패",
  trialTime: "총 시도한 횟수: ",
});

const INPUT_MESSAGE = Object.freeze({
  numberOfBridge: "다리의 길이를 입력해주세요.",
  chooseUpOrDown: "이동할 칸을 선택해주세요. (위: U, 아래: D)",
  chooseToRetry:
    "게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)",
});

const ERROR_MESSAGE = Object.freeze({
  notInRange: `${ERROR} 다리 갯수는 3개 이상, 20개 이하인 정수여야 합니다.`,
  notUorD: `${ERROR} U(위)와 D(아래) 이외는 입력 할 수 없습니다.`,
  notRorQ: `${ERROR} R(재시도)와 Q(종료) 이외는 입력할 수 없습니다.`,
});

const LETTER = Object.freeze({
  up: "U",
  down: "D",
  retry: "R",
  quit: "Q",
  correct: "O",
  wrong: "X",
});

module.exports = { MESSAGE, ERROR_MESSAGE, INPUT_MESSAGE, LETTER };
