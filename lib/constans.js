const GAME_QUESTION = Object.freeze({
  size: '\n다리의 길이를 입력해주세요.\n',
  moving: '\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n',
  retry: '\n게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n'
});

const GAME_COMMAND = Object.freeze({
  up: 'U',
  down: 'D',
  retry: 'R',
  quit: 'Q'
});

const GAME_MESSAGE = Object.freeze({
  start: '다리 건너기 게임을 시작합니다.',
  end: '\n최종 게임 결과',
  success: '성공',
  failure: '실패'
});

const PREFIX = '[ERROR]';
const ERROR_MESSAGE = Object.freeze({
  size: `${PREFIX} 다리 길이는 3부터 20 사이의 숫자여야 합니다.`,
  moving: `${PREFIX} U(위) 또는 D(아래) 중에 선택해야 합니다.`,
  retry: `${PREFIX} R(재시작) 또는 Q(종료) 중에 선택해야 합니다.`
});

module.exports = {
  GAME_QUESTION,
  GAME_COMMAND,
  GAME_MESSAGE,
  ERROR_MESSAGE
};
