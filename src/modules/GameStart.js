const BridgeGame = require("../BridgeGame");

class GameStart {
  #toWalkCount = 0;
  #brigeArr = [];
  #BRIDGEGAME;
  #answer = false;
  constructor(upOrDown, arrUp, arrDown) {
    this.#BRIDGEGAME = new BridgeGame();
    this.changeOX(upOrDown, arrUp, arrDown);
    this.#brigeArr.push(arrUp);
    this.#brigeArr.push(arrDown);
  }
  // 이중 배열 반환 [[],[]]
  getBrigeArr() {
    return this.#brigeArr;
  }
  // 재시작 유무 반환
  getAnswer() {
    return this.#answer;
  }
  // 다리 U/D 값 -> O/X 값으로 변경
  changeOX(upOrDown, arrUp, arrDown) {
    upOrDown.some((move) => {
      move === "U"
        ? this.#BRIDGEGAME.move(arrUp, this.#toWalkCount, move)
        : this.#BRIDGEGAME.move(arrDown, this.#toWalkCount, move);
      this.#toWalkCount += 1;
      // "X" 값 유무로 게임 중지
      if (arrUp.includes("X") || arrDown.includes("X")) {
        this.#answer = this.#BRIDGEGAME.retry();
        return true;
      }
    });
  }
}

module.exports = GameStart;
