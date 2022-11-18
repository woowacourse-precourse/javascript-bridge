const BridgeGame = require("../BridgeGame");

class GameStart {
  #toWalkCount = 0;
  #brigeArr = [];
  constructor(upOrDown, arrUp, arrDown) {
    const BRIDGEGAME = new BridgeGame();
    upOrDown.forEach((move) => {
      // 위로 or 아래로
      move === "U"
        ? BRIDGEGAME.move(arrUp, this.#toWalkCount, move)
        : BRIDGEGAME.move(arrDown, this.#toWalkCount, move);
      this.#toWalkCount += 1;
    });
    this.#brigeArr.push(arrUp);
    this.#brigeArr.push(arrDown);
  }
  getBrigeArr() {
    console.log(this.#brigeArr);
    return this.#brigeArr;
  }
}

module.exports = GameStart;
