const validCheck = {
  bridgeLength: (input) => {
    if (
      !Number.isNaN(Number(input)) &&
      Number(input) >= 3 &&
      Number(input) <= 20
    )
      return true;
    return false;
  },

  moveInput: (input) => {
    if (input.toUpperCase() === 'U' || input.toUpperCase() === 'D') return true;
    return false;
  },

  quitInput: (input) => {
    if (input.toUpperCase() === 'R' || input.toUpperCase() === 'Q') return true;
    return false;
  },
};

module.exports = validCheck;
