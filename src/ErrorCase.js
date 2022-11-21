const ErrorCase = {
  checkBridgeSizeInput(input) {
    const parsed = Number(input);

    if (isNaN(parsed)) return true;

    if (parsed < 3 || parsed > 20) return true;

    if (parsed !== Math.floor(parsed)) return true;

    return false;
  },
};

module.exports = ErrorCase;
