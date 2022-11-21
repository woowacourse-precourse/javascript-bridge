const COMMAND = require('./command');
const NUMBER = require('./number');

const ERROR_MESSAGE = Object.freeze({
  TYPE_ERROR: '[ERROR] 숫자만 입력하세요.\n',
  SIZE_ERROR: `[ERROR] ${NUMBER.MIN} ~ ${NUMBER.MAX} 사이 숫자만 입력하세요.\n`,
  MOVE_RROR: `[ERROR] ${COMMAND.UP} 혹은 ${COMMAND.DOWN}만 입력하세요.\n`,
  RETRY_ERROR: `[ERROR] ${COMMAND.QUIT} 혹은 ${COMMAND.REPLAY}만 입력하세요.\n`,
});

module.exports = ERROR_MESSAGE;
