const PlayerMove = {
  movePossible(to, position, bridge) {
    if (to === bridge[position]) return true;
    return false;
  },

  getCurrentRoute(position, bridge, possible) {
    const upBridgeRoute = new Array(position + 1).fill(' ');
    const downBridgeRoute = new Array(position + 1).fill(' ');
    for (let i = 0; i < position + Number(possible); i += 1) {
      if (bridge[i] === 'U') upBridgeRoute[i] = 'O';
      if (bridge[i] === 'D') downBridgeRoute[i] = 'O';
    }
    if (!possible) {
      if (bridge[position] === 'U') downBridgeRoute[position] = 'X';
      if (bridge[position] === 'D') upBridgeRoute[position] = 'X';
    }
    return { upBridgeRoute, downBridgeRoute };
  },
};

module.exports = PlayerMove;
