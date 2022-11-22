const MIN = 3;
const MAX = 20;

const LOWER_ZONE_NUMBER = 0;
const UPPER_ZONE_NUMBER = 1;
const LOWER_ZONE = "D";
const UPPER_ZONE = "U";
const RIGHT_ZONE = "O";
const WRONG_ZONE = "X";

const RESTART = "R";
const END = "Q";

const DECIMAL = 10;
const REPEAT_START = 0;
const ATTEMPT_START = 1;
const ATTEMPT_INCREASE = 1;

const LENGTH = {
  MIN,
  MAX,
};

const BRIDGE = {
  LOWER_ZONE_NUMBER,
  UPPER_ZONE_NUMBER,
  LOWER_ZONE,
  UPPER_ZONE,
  RIGHT_ZONE,
  WRONG_ZONE,
};

const COMMAND = {
  RESTART,
  END,
};

module.exports = {
  LENGTH,
  BRIDGE,
  COMMAND,
  DECIMAL,
  REPEAT_START,
  ATTEMPT_START,
  ATTEMPT_INCREASE,
};
