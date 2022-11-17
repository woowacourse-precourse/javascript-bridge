const Validation = {
  ValidCmd(cmd) {
    return cmd != "R" && cmd != "Q" ? false : true;
  },

  ValidMove(move) {
    return move != "U" && move != "D" ? false : true;
  },

  ValidSize(input) {
    return this.CheckNotANumber(input) && this.CheckInputRange(input);
  },

  CheckNotANumber(input) {
    return !isNaN(input) ? true : false;
  },

  CheckInputRange(input) {
    return +input < 3 || +input > 20 ? false : true;
  },
};

module.exports = Validation;
