const BridgeGame = require("../BridgeGame");

class GameStart {
  #toWalkCount = 0;
  constructor(upOrDown, arrUp, arrDown) {
    const BRIDGEGAME = new BridgeGame();
    upOrDown.forEach((move) => {
      // 위로 or 아래로
      move === "U"
        ? BRIDGEGAME.move(arrUp, this.#toWalkCount, move)
        : BRIDGEGAME.move(arrDown, this.#toWalkCount, move);
      this.#toWalkCount += 1;
      console.log(arrUp, arrDown);
    });
  }
}

module.exports = GameStart;
