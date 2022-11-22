const { COMMAND } = require('./constants');

const convertBridge = (bridge, user, upOrDown) => {
  const convertedBridge = user.map((status, i) => {
    if (status !== upOrDown) return ' ';
    if (status === bridge[i]) return 'O';
    return 'X';
  });

  return convertedBridge;
};

const createCurrentBridge = (bridge, user) => {
  const currentBridge = [];
  currentBridge.push(convertBridge(bridge, user, COMMAND.UP));
  currentBridge.push(convertBridge(bridge, user, COMMAND.DOWN));
  return currentBridge;
};

module.exports = { convertBridge, createCurrentBridge };
