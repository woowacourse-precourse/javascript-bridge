const ERROR_CODE = Object.freeze({
  NOT_NUMBER: "NOT_NUMBER",
  OUT_OF_RANGE: "OUT_OF_RANGE",
});

const ERROR_MESSAGE = Object.freeze({
  NOT_NUMBER: "[ERROR] 숫자만 입력해 주세요.",
  OUT_OF_RANGE: "[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.",
});

const createParams = (code, value) =>
  // eslint-disable
  [ERROR_MESSAGE[code], { cause: { code, value } }];

class CustomError extends Error {
  constructor(code, value = null) {
    super(...createParams(code, value));
  }
}

module.exports = { CustomError, ERROR_CODE };
