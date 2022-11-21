// TODO : 상수도 커맨드 별로 분류시켜 놓는 게 나을지... 고민

const Constant = {
  UP_MOVING: "U",
  DOWN_MOVING: "D",
  VALID_CHECK_ERROR: -1,
  VALID_CHECK_DO: 0,
  VALID_CHECK_PASS: 1,
  OPEN_PARENTHESIS: '[',
  CLOSE_PARENTHESIS:']',
  MIDDLE_PARENTHESIS: '|',
  COLLECT_SELECT_CASE: " O ",
  WRONG_SELECT_CASE: " X ",
  NOT_SELECT_CASE: "   ",
  SUCCESS_TERMINATION: "성공",
  FAIL_TERMINAITION: "실패",
  QUIT_COMMAND: "Q",
  RESTART_COMMAND: "R"
}

module.exports = Constant;