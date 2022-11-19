const validCheck = {
  bridgeLength: (input) => {
    if (!Number.isNaN(Number(input))) return true;
    return false;
  },
  moveInput: (input) => {
    if (input === 'U' || input === 'D') return true;
    return false;
  },
  quitInput: (input) => {
    if (input === 'R' || input === 'Q') return true;
    return false;
  },
};

module.exports = validCheck;
