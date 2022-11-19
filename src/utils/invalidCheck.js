const invalidCheck = {
  bridgeLength: (input) => {
    if (!Number.isNaN(Number(input))) return true;
    return false;
  },
  moveInput: (input) => {
    if (input === 'U' || input === 'D') return true;
    return false;
  },
};

module.exports = invalidCheck;
