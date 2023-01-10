const Judge = {
  isGameOver(bridge, moves) {
    return bridge.length === moves.length;
  },

  isCorrect(bridge, moves) {
    const lastIndex = moves.length - 1;
    return moves[lastIndex] === bridge[lastIndex];
  },
};

module.exports = Judge;
