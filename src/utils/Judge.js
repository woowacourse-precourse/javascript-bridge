const Judge = {
  judgeGameSuccess(movingState, bridge) {
    return (
      movingState.length === bridge.length &&
      movingState[movingState.length - 1][1]
    );
  },
};

module.exports = Judge;
