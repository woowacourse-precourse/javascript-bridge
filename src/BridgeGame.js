const { generate } = require("./BridgeRandomNumberGenerator");
const { makeBridge } = require("./BridgeMaker");
/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {

  constructor() {
    this.currPos = 0;
    this.trialCount = 1;
    this.printMap = [[],[]];
    this.bridge;
  }

  makeRandomBridge(bridgeLength){
    this.bridgeLength = bridgeLength;
    this.bridge =  makeBridge(bridgeLength, generate);
  }

   /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   */
  move(userUD) {
    let currbridge = this.bridge[this.currPos];
    if (userUD == currbridge) this.addPrintMap(userUD, "O"); 
    else this.addPrintMap(userUD, "X")
    this.currPos++;
    return userUD == currbridge ? "Go" : "Stop";
  }

  addPrintMap(userUD, answer){
    if (userUD == "U") {
      this.printMap[0].push(answer)
      this.printMap[1].push(" ");
    } else {
      this.printMap[0].push(" ");
      this.printMap[1].push(answer);
    }
    return this.printMap;
  }

  success(){
    if (this.bridgeLength == this.currPos) return "Success"
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   */
  retry(userRQ) {
    if (userRQ == "R" ){
      this.currPos = 0;
      this.trialCount++;
      this.printMap = [[],[]];
      return "Retry";
    } 
    return "Quit";
  }
}

module.exports = BridgeGame;