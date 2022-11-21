const { U, D } = require("./constants");

const ErrorCase = {
  checkBridgeSizeInput(input) {
    const parsed = Number(input);

    if (isNaN(parsed)) return true;

    if (parsed < 3 || parsed > 20) return true;

    if (parsed !== Math.floor(parsed)) return true;

    return false;
  },

  checkMovingInput(input) {
    if (input === U || input === D) return false;

    return true;
  },
};

module.exports = ErrorCase;
