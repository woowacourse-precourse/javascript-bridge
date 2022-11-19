const ValidCmd = (cmd) => {
  return cmd != "R" && cmd != "Q" ? false : true;
};

const ValidMove = (move) => {
  return move != "U" && move != "D" ? false : true;
};

const ValidSize = (input) => {
  return CheckNotANumber(input) && CheckInputRange(input);
};

const CheckNotANumber = (input) => {
  return !isNaN(input) ? true : false;
};

const CheckInputRange = (input) => {
  return +input < 3 || +input > 20 ? false : true;
};

module.exports = {
  ValidSize,
  ValidMove,
  ValidCmd,
};
