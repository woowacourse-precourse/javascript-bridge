const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const { Symbol } = require("./constant/Constants");
 
class BridgeGame {
  #bridge
  #upBridge
  #downBridge
  #currentIndex;
  #tryNumber;
  #isCorrect;
  #isSuccess;

  constructor(){
    this.#upBridge = [];
    this.#downBridge = [];
    this.#tryNumber = 1;
    this.#currentIndex = 0;
  }

  getCurrentBridge(){
    return [this.#upBridge, this.#downBridge];
  }
  
  getIsCorrect(){
    return this.#isCorrect;
  }

  getIsSuccess(){
    return this.#isSuccess;
  }

  getTryNumber(){
    return this.#tryNumber;
  }

  makeBridge(size){
    this.#bridge = BridgeMaker.makeBridge(parseInt(size), BridgeRandomNumberGenerator.generate);
  }

  compareBridgeWithDirection(direction){
    this.#isCorrect = this.#bridge[this.#currentIndex] === direction ? true : false;
  }

  addSymbolToEachBridge(choicedBrdige, notChoicedBridge, isCorrect){
    choicedBrdige.push(isCorrect ? Symbol.RIGHT : Symbol.WRONG);
    notChoicedBridge.push(Symbol.NOTHING);
  }

  move(direction) {
    this.compareBridgeWithDirection(direction);
    this.isSuccess();
    direction === Symbol.UP ? this.addSymbolToEachBridge(this.#upBridge, this.#downBridge, this.#isCorrect) 
    : this.addSymbolToEachBridge(this.#downBridge, this.#upBridge, this.#isCorrect);
    this.#currentIndex += 1;
  }

  isSuccess(){
    this.#isSuccess = (this.#bridge.length-1 === this.#currentIndex && this.#isCorrect) ? true : false;
  }

  countTryNumber() {
    this.#tryNumber += 1;
  }

  retry() {
    this.#isSuccess ? this.#tryNumber = 1 : this.countTryNumber();
    this.#upBridge = [];
    this.#downBridge = [];
    this.#currentIndex = 0;
  }
}

module.exports = BridgeGame;
