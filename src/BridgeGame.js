const Player = require("./Player");
class BridgeGame {
  #move;
  #bridgeShape;

  constructor(bridgeShape, move) {
    this.#bridgeShape = bridgeShape;
    this.#move = move;
  }

  move() {
    Player.movingArray.push(this.#move);
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
