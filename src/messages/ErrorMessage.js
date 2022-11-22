const BASE = "[ERROR]";

const ErrorMessage = {
  NOT_INTEGER: BASE + " 숫자값으로만 입력해주세요.",
  NOT_VALID_DIRECTION: BASE + " 방향은 U,D 둘 중에 하나로만 입력해주세요.",
  NOT_VALID_COMMAND: BASE + " R,Q 중에 하나만 입력해주세요.",
  NOT_IN_RANGE: BASE + "숫자값이 범위 밖에 있습니다.",
};

module.exports = ErrorMessage;
