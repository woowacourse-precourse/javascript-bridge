const ValidCmd = (cmd) => {
  if (cmd != "R" && cmd != "Q") throw new Error();
};

const ValidMove = (move) => {
  if (move != "U" && move != "D") throw new Error();
};

const ValidSize = (input) => {
  CheckNotANumber(input);
  CheckInputRange(input);
};

const CheckNotANumber = (input) => {
  if (isNaN(input)) throw new Error();
};

const CheckInputRange = (input) => {
  if (+input < 3 || +input > 20) throw new Error();
};

module.exports = {
  ValidSize,
  ValidMove,
  ValidCmd,
};

// throw Error 여기서 하는 방향으로
