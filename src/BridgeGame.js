class BridgeGame {
  move(turnNumber, bridge, moveUpDown) {
    if (bridge[turnNumber] == moveUpDown) {
      if (turnNumber == bridge.length - 1) {
        return 0;
      }
      return 1;
    }
    if (bridge[turnNumber] != moveUpDown) {
      return -1;
    }
  }

  retry(isRetry) {
    if (isRetry == "R") return 1;
    if (isRetry == "Q") return 0;
  }
}

module.exports = BridgeGame;
