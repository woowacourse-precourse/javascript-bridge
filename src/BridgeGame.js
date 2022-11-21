/**
 * 다리 건너기 게임을 관리하는 클래스
 */
const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
 
class BridgeGame {
  #bridge
  #upBridge
  #downBridge
  #currentIndex;
  #tryNumber;
  #isCorrect;

  constructor(){
    this.#upBridge = [];
    this.#downBridge = [];
    this.#tryNumber = 1
    this.#currentIndex = 0;
  }

  makeBridge(size){
    this.#bridge = BridgeMaker.makeBridge(parseInt(size), BridgeRandomNumberGenerator.generate);
    console.log(this.#bridge);
  }

  compareBridgeWithDirection(direction){
    this.#isCorrect = this.#bridge[this.#currentIndex] === direction ? true : false;
  }

  getCurrentMap(){
    return [this.#upBridge, this.#downBridge];
  }
  
  getIsCorrect(){
    return this.#isCorrect;
  }

  addUpMap(isCorrect){
    this.#upBridge.push(isCorrect ? "O" : "X");
    this.#downBridge.push(" ");
  }

  addDownMap(isCorrect){
    this.#downBridge.push(isCorrect ? "O" : "X");
    this.#upBridge.push(" ");
  }

  move(direction) {
    this.compareBridgeWithDirection(direction);
    direction === "U" ? this.addUpMap(this.#isCorrect) : this.addDownMap(this.#isCorrect);
    this.#currentIndex += 1;
  }

  retry() {}
}

module.exports = BridgeGame;
