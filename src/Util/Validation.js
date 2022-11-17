const Validation = {
  ValidCmd(cmd) {
    if (cmd != "R" && cmd != "Q") {
      return false;
    }
    return true;
  },

  ValidMove(move) {
    if (move != "U" && move != "D") {
      return false;
    }
    return true;
  },

  ValidSize(input) {
    return this.CheckNotANumber(input) && this.CheckInputRange(input);
  },

  CheckNotANumber(input) {
    if (isNaN(input)) {
      return false;
    }
    return true;
  },

  CheckInputRange(input) {
    if (+input < 3 || +input > 20) {
      return false;
    }
    return true;
  },
};

module.exports = Validation;
