const NUMBER_MESSAGE = {
  BRIDGE_START: 3,
  BRIDGE_END: 20,
  flagBridge(randomnum) {
    if (randomnum === '1') {
      return 'U';
    }
    return 'D';
  },
};

Object.freeze(NUMBER_MESSAGE);
module.exports = NUMBER_MESSAGE;
