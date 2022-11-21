const Player = require("./Player");
class BridgeGame {
  move(bridgeShape, move) {
    Player.movingArray(move);
    const currentIndex = Player.movingArray.length - 1;

    if (Player.movingArray[currentIndex] === this.#bridgeShape[currentIndex]) {
      return true;
    }
    return false;
  }

  retry(command) {
    if (command === "R") {
      return true;
    }
    return false;
  }
}

module.exports = BridgeGame;
