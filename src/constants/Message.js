const prefix = '[ERROR]';

const ERROR_BRIDGE_MESSAGE = Object.freeze({
  ONLY_STRING: `${prefix} 다리 길이는 문자가 아닌 숫자여야 합니다.`,
  RANGE: `[ERROR] 다리 길이는 3이상 20이하 숫자여야 합니다.`
});

const ERROR_MOVE_MESSAGE = Object.freeze({
  ONLY_STRING: `${prefix} 'U'(위), 'D'(아래) 중 하나의 문자만 입력해주세요!`,
  CAPITAL: `${prefix} 대문자로 입력해주세요!`,
  WRONG: `${prefix} 이동할 칸은 문자 'U'(위), 'D'(아래) 중 하나여야 합니다.`
});

const ERROR_RETRY_MESSAGE = Object.freeze({
  ONLY_STRING: `${prefix} 'R'(재시도), 'Q'(종료) 중 하나의 문자만 입력해주세요!`,
  CAPITAL: `${prefix} 입력값은 대문자여야 합니다.`,
  WRONG: `${prefix} 'R'(재시도), 'Q'(종료) 중 하나만 입력해주세요.`
});

const BRIDGE_LENGTH_MESSAGE = '다리의 길이를 입력해주세요.\n';
const MOVE_MESSAGE = '이동할 칸을 선택해주세요. (위: U, 아래: D)\n';
const RETRY_MESSAGE = '게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n';

module.exports = {
  ERROR_BRIDGE_MESSAGE,
  ERROR_MOVE_MESSAGE,
  ERROR_RETRY_MESSAGE,
  BRIDGE_LENGTH_MESSAGE,
  MOVE_MESSAGE,
  RETRY_MESSAGE
};
