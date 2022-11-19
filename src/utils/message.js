const GAME_MESSAGE = Object.freeze({
  start: '다리 건너기 게임을 시작합니다.\n',
  askBridgeSize: '\n다리의 길이를 입력해주세요.\n',
  askMoveDirection: '\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n',
  askGameCommand: '\n게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n',
});

const ERROR_MESSAGE = Object.freeze({
  bridgeSize: '[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.',
  move: `[ERROR] 다리 이동에 대한 입력은 'U'와 'D'만 가능합니다.`,
  command: `[ERROR] 게임 재시도 및 종료에 대한 입력은 'R'과 'Q'만 가능합니다.`,
});

module.exports = { GAME_MESSAGE, ERROR_MESSAGE };
