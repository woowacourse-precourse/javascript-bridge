const GAME_MESSAGES = {
  gameStart: "다리 건너기 게임을 시작합니다.",

  messageOfInputSize: "\n다리의 길이를 입력해주세요.\n",

  messageOfInputMoving: "\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n",

  messageOfInputGameCommand: "\n게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n"
}

const ERROR_MESSAGES = {
  bridgeSize: "[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.",

  moving: "[ERROR] 이동할 칸은 'U' 혹은 'D'여야 합니다.",

  gameCommand: "[ERROR] 재시작 혹은 종료는 'R' 혹은 'Q'여야 합니다."
}

const RESULT_MESSAGES = {
  finalResult: "최종 게임 결과",

  gameResult: (gameResult) => `\n게임 성공 여부: ${gameResult}`,

  tryCount: (numberOfPlayGames) => `총 시도한 횟수: ${numberOfPlayGames}`
}

const GAME_VALUES = {
  upperCharO: 'O',

  upperCharX: 'X',

  upperCharR: 'R',

  upperCharQ: 'Q',

  upperCharU: 'U',

  upperCharD: 'D',

  blank: ' ',

  counter: 1,

  minBridgeSize: 3,

  maxBridgeSize: 20
}

const INITIALIZE_VALUES = {
  initializedPosition: -1,

  zero: 0,

  failure: "실패",

  success: "성공"
}

module.exports = {
  GAME_MESSAGES,
  ERROR_MESSAGES,
  RESULT_MESSAGES,
  GAME_VALUES,
  INITIALIZE_VALUES
}