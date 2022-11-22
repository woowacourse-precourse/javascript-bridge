class BridgeGame {
  RETRY_COMMAND = "R";
  QUIT_COMMAND = "Q";

  move(turnNumber, bridge, moveUpDown) {
    if (bridge[turnNumber] == moveUpDown) {
      if (turnNumber == bridge.length - 1) return 0;
      return 1;
    }
    if (bridge[turnNumber] != moveUpDown) return -1;
  }

  retry(isRetry) {
    if (isRetry == this.RETRY_COMMAND) return 1;
    if (isRetry == this.QUIT_COMMAND) return 0;
  }
}

module.exports = BridgeGame;
