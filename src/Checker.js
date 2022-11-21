const Checker = {
  checkSpaceCanCross(movingInput, bridgeSpace) {
    return movingInput === bridgeSpace;
  },

  checkCrossBridge(endRound, bridgeLength) {
    return endRound === bridgeLength;
  },
};

module.exports = Checker;
