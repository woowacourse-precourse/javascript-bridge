const { generate } = require("./BridgeRandomNumberGenerator");
const { makeBridge } = require("./BridgeMaker.js");

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridgeShape
  #playerMovingRecord
  #attemptNumber

  constructor(size){
    this.#bridgeShape = makeBridge(size, generate);
    this.#playerMovingRecord = "";
    this.#attemptNumber = 1;
  }

  move(playerMoving) {
    if(this.#bridgeShape.length > this.playerLoction()){
      this.#playerMovingRecord = this.#playerMovingRecord + playerMoving;
    }
  }

  retry() {
    this.#playerMovingRecord = "";
    this.#attemptNumber++;
  }

  isFinish() {
    if (this.#bridgeShape.length <= this.playerLoction())
      return true;
    
    return false;
  }

  isSuccess() {
    const bridgeFootboard = this.#bridgeShape[this.playerLoction() - 1];
    const playerMoving = this.#playerMovingRecord[this.#playerMovingRecord.length - 1];
    const isSuccess = (bridgeFootboard === playerMoving);

    return isSuccess;
  }

  playerLoction(){
    return this.#playerMovingRecord.length;
  }

  getPlayerMovingRecord(){
    return this.#playerMovingRecord;
  }

  getAttemptNumber(){
    return this.#attemptNumber;
  }
}

module.exports = BridgeGame;
