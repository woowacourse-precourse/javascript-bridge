const MoveMapMaker = {
  makeUserMoveMap(moveMap) {
    const upperBridge = moveMap.map((move) => (move[0] === 'U' ? move[1] : ' '));
    const lowerBridge = moveMap.map((move) => (move[0] === 'D' ? move[1] : ' '));
    return [upperBridge, lowerBridge];
  },
  mapToString(bridge) {
    const notConvertBridge = bridge.map((bridgeSide) => {
      return '[ ' + bridgeSide.join(' | ') + ' ]';
    });
    return notConvertBridge;
  },
};

module.exports = MoveMapMaker;
