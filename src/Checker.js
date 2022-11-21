const Checker = {
  checkSpaceCanMove(movingInput, bridgeSpace) {
    return movingInput === bridgeSpace;
  },

  checkCrossBridge(endRound, bridgeLength) {
    return endRound === bridgeLength;
  },
};

module.exports = Checker;
