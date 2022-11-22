const { USER_INPUT, RANGE } = require("../Messages/constants");

const ValidCmd = (cmd) => {
  if (cmd != USER_INPUT.RESTART && cmd != USER_INPUT.QUIT) throw new Error();
};

const ValidMove = (move) => {
  if (move != USER_INPUT.UP && move != USER_INPUT.DOWN) throw new Error();
};

const ValidSize = (input) => {
  CheckNotANumber(input);
  CheckInputRange(input);
  CheckIsInteger(input);
};

const CheckIsInteger = (input) => {
  if (!Number.isInteger(+input)) throw new Error();
};

const CheckNotANumber = (input) => {
  if (isNaN(input)) throw new Error();
};

const CheckInputRange = (input) => {
  if (+input < RANGE.MIN_RANGE || +input > RANGE.MAX_RANGE) throw new Error();
};

module.exports = {
  ValidSize,
  ValidMove,
  ValidCmd,
};
