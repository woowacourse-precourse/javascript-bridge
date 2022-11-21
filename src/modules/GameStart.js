const BridgeGame = require("../BridgeGame");

class GameStart {
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
    let toWalkCount = 0;
    upOrDown.some((move) => {
      move === "U"
        ? this.#BRIDGEGAME.move(arrUp, toWalkCount, move)
        : this.#BRIDGEGAME.move(arrDown, toWalkCount, move);
      toWalkCount += 1;
      // "X" 값 유무로 게임 중지
      const includeX = this.#BRIDGEGAME.retry(arrUp, arrDown);
      this.#answer = this.#BRIDGEGAME.answer;
      if (includeX) return true;
    });
  }
}

module.exports = GameStart;
