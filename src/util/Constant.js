const OUTPUT_MESSAGE = Object.freeze({
  START: "다리 건너기 게임을 시작합니다.",
});

const QUERY_MESSAGE = Object.freeze({
  BRIDGE_SIZE: "\n다리의 길이를 입력해주세요.\n",
});

const ERROR = "[ERROR]";
const ERROR_MESSAGE = Object.freeze({
  BRIDGE_SIZE: `${ERROR} 다리 길이는 3부터 20 사이의 숫자여야 합니다.`,
});

module.exports = { OUTPUT_MESSAGE, QUERY_MESSAGE, ERROR_MESSAGE };
