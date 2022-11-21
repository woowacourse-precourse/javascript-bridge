const convertBridge = (bridge, user, upOrDown) => {
  const convertedBridge = user.map((status, i) => {
    if (status !== upOrDown) return ' ';
    if (status === bridge[i]) return 'O';
    return 'X';
  });

  return convertedBridge;
};

module.exports = { convertBridge };
