const MSG = Object.freeze({
  startGame: '다리 건너기 게임을 시작합니다.\n',
  endGame: '최종 게임 결과',
  inputBridgeSize: '다리의 길이를 입력해주세요.\n',
  inputMoveDirection: '이동할 칸을 선택해주세요. (위: U, 아래: D)\n',
  inputRestartOrQuitGame: '게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n',
  statisticGame(result, cnt) {
    const resultTxt = result ? '성공' : '실패';

    return `게임 성공 여부: ${resultTxt}\n총 시도한 횟수: ${cnt}`;
  },
});

const ERROR_MSG = Object.freeze({
  invalidBridgeSize: '[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.',
  invalidMoveDirection: '[ERROR] 이동할 칸은 U(위) 혹은 D(아래)여야 합니다.',
  invalidGameCmd: '[ERROR] 입력은 R(재시도) 혹은 Q(종료)여야 합니다.',
});

const DIRECTION = Object.freeze({
  up: 'U',
  down: 'D',
  correct: 'O',
  wrong: 'X',
});

const ROW_IDX = Object.freeze({
  U: 0,
  D: 1,
});

const EMPTY = ' ';

const NEXT_STEP = Object.freeze({
  correctMove: 'correctMove',
  wrongMove: 'wrongMove',
  endGame: 'endGame',
});

const GAME_CMD = Object.freeze({
  restart: 'R',
  quit: 'Q',
});

module.exports = { MSG, ERROR_MSG, DIRECTION, ROW_IDX, EMPTY, NEXT_STEP, GAME_CMD };
