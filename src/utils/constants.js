const INPUT_MESSAGE = Object.freeze({
  enterBridgeSize: '다리의 길이를 입력해주세요.\n',
  enterMoving: '\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n',
  enterGameCommand: '\n게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n',
});

const OUTPUT_MESSAGE = Object.freeze({
  gameStart: '다리 건너기 게임을 시작합니다.\n',
  gameQuit: '\n최종 게임 결과',
  gameSuccess: '\n게임 성공 여부: 성공',
  gameFail: '\n게임 성공 여부: 실패',
  gameTryCount: (tryCount) => `총 시도한 횟수: ${tryCount}`,
});

const INPUT_ERROR = Object.freeze({
  bridgeSize: '[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.',
  moving: '[ERROR] 이동할 칸은 U 또는 D를 입력하여야 합니다.',
  gameCommand: '[ERROR] 게임 명령어는 R 또는 Q를 입력하여야 합니다.',
});

const BRIDGE = Object.freeze({
  minSize: 3,
  maxSize: 20,
  up: 'U',
  down: 'D',
  right: 'O',
  wrong: 'X',
  createError: '[ERROR] 유효하지 않은 Brdige객체 생성입니다.',
});

const GAME = Object.freeze({
  retry: 'R',
  quit: 'Q',
});

module.exports = {
  INPUT_MESSAGE,
  OUTPUT_MESSAGE,
  INPUT_ERROR,
  BRIDGE,
  GAME,
};
