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
    JUMP: " | ",
    START_BRIDGE: "[",
    END_BRIDGE: "]",
  };

  const RETRY = {
    REPLAY: "R",
    END: "Q",
  };
  
  const RESULT = {
    SUCCESS: "성공",
    FAIL: "실패",
  };

  const CONTROL = {
    PASS_STEP: 1,
    GAME_END: 2,
    GAME_OVER: 3,
  };

  const POSITION_SYMBOLL = {
    UP_STREET: 0,
    DOWN_STREET: 1,
  }

module.exports = { SIZE, MOVING, RETRY, RESULT, CONTROL, POSITION_SYMBOLL };