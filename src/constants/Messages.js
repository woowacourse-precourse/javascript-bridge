const ERROR = '[ERROR]';

const COMMAND = Object.freeze({
  up: 'U',
  down: 'D',
  retry: 'R',
  quit: 'Q',
});

const INPUT_MESSAGE = Object.freeze({
  bridge_size: '다리의 길이를 입력해주세요.\n',
  moving: `이동할 칸을 선택해주세요. (위: ${COMMAND.up}, 아래: ${COMMAND.down})\n`,
  game_command: `게임을 다시 시도할지 여부를 입력해주세요. (재시도: ${COMMAND.retry}, 종료: ${COMMAND.quit})\n`,
});

const OUTPUT_MESSAGE = Object.freeze({
  start: '다리 건너기 게임을 시작합니다.',
  new_line: '',
  result: '최종 게임 결과',
  success_faliure: (result) => `게임 성공 여부: ${result}`,
  attempts_count: (count) => `총 시도한 횟수: ${count}`,
});

const ERROR_MESSAGE = Object.freeze({
  bridge_size: `${ERROR} 다리 길이는 3부터 20 사이의 숫자여야 합니다.`,
  moving: `${ERROR} 입력값은 문자 '${COMMAND.up}'이거나 '${COMMAND.down}'여야 합니다.`,
  game_command: `${ERROR} 입력값은 문자 '${COMMAND.retry}'이거나 '${COMMAND.quit}'여야 합니다.`,
});

module.exports = { INPUT_MESSAGE, OUTPUT_MESSAGE, ERROR_MESSAGE };
