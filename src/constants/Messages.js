const { MOVE_COMMAND, GAME_COMMAND } = require('./Settings');

const MESSAGES = Object.freeze({
  start: '다리 건너기 게임을 시작합니다.\n',
  bridgeSize: '다리의 길이를 입력해주세요.\n',
  command: `이동할 칸을 선택해주세요. (위: ${MOVE_COMMAND.up}, 아래: ${MOVE_COMMAND.down})\n`,
  retryOrQuit: `게임을 다시 시도할지 여부를 입력해주세요. (재시도: ${GAME_COMMAND.retry}, 종료: ${GAME_COMMAND.quit})\n`,
});

module.exports = MESSAGES;
