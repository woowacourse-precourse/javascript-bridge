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
  currentBridge.push(convertBridge(bridge, user, 'U'));
  currentBridge.push(convertBridge(bridge, user, 'D'));
  return currentBridge;
};

module.exports = { convertBridge, createCurrentBridge };
