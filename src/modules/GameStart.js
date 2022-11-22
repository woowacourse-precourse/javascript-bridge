const BridgeGame = require("../BridgeGame");
const InputView = require("../InputView");

class GameStart {
  #brigeArr = [];
  #BRIDGEGAME;
  #inputR = false;
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
    return this.#inputR;
  }
  // 다리 U/D 값 -> O/X 값으로 변경
  changeOX(upOrDown, arrUp, arrDown) {
    let toWalkCount = 0;
    upOrDown.some((move) => {
      move === "U"
        ? this.#BRIDGEGAME.move(arrUp, toWalkCount, move)
        : this.#BRIDGEGAME.move(arrDown, toWalkCount, move);
      toWalkCount += 1;
      return this.checkX(arrUp, arrDown);
    });
  }
  // X 유무 확인
  checkX(arrUp, arrDown) {
    const includeX = this.#BRIDGEGAME.retry(arrUp, arrDown);
    if (includeX) this.#inputR = InputView.readGameCommand();
    return includeX;
  }
}

module.exports = GameStart;
