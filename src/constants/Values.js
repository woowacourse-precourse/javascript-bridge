const SIZE = {
   MIN_NUMBER: 3,
   MAX_NUMBER: 20,
  };
  
  const MOVING = {
    UPSIDE_NUMBER: "1",
    DOWNSIDE_NUMBER: "0",
    UPSIDE_STRING: "U",
    DOWNSIDE_STRING: "D",
    PASS: "O",
    UNPASSED: "X",
    BLANK: " ",
  };

  const RETRY = {
    REPLAY: "R",
    END: "Q",
  };
  
  const RESULT = {
    SUCCESS: "성공",
    FAIL: "실패",
  };

  const CALCULATION = {
    DECIMAL_NUMBER: 10
  };
  
module.exports = { SIZE, MOVING, RETRY, RESULT, CALCULATION };