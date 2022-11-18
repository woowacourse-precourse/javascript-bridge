const BridgeGame = require("../BridgeGame");

class GameStart {
  #toWalkCount = 0;
  #brigeArr = [];
  #BRIDGEGAME;
  constructor(upOrDown, arrUp, arrDown) {
    this.#BRIDGEGAME = new BridgeGame();
    this.changeOX(upOrDown, arrUp, arrDown);
    this.#brigeArr.push(arrUp);
    this.#brigeArr.push(arrDown);
  }
  getBrigeArr() {
    return this.#brigeArr;
  }
  changeOX(upOrDown, arrUp, arrDown) {
    upOrDown.some((move) => {
      // 위로 or 아래로
      move === "U"
        ? this.#BRIDGEGAME.move(arrUp, this.#toWalkCount, move)
        : this.#BRIDGEGAME.move(arrDown, this.#toWalkCount, move);
      this.#toWalkCount += 1;
      if (arrUp.includes("X") || arrDown.includes("X")) {
        this.#BRIDGEGAME.retry();
        return true;
      }
    });
  }
}

module.exports = GameStart;
