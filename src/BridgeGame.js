const BridgeMaker = require("./BridgeMaker.js")
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator.js")
const OutputView = require("./OutputView.js")
/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  constructor(){
    this.bridge
    this.number = 0
    this.bridgeMap = new Map()
    this.upside = []
    this.downside = []
  }
  makeBridge(length){
    this.bridge = BridgeMaker.makeBridge(length, BridgeRandomNumberGenerator.generate)
    console.log(this.bridge)
  }
  checkBridgeCorrect(input){
    if(this.bridge[this.number] == input){
      return true
    }

  }
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move() {
    this.number += 1
    if (this.bridge[this.number - 1] == "U"){
      this.upside.push("O")
      this.downside.push(" ")
    }
    else if(this.bridge[this.number - 1] == "D"){
      this.upside.push(" ")
      this.downside.push("O")
    }
    OutputView.printMap(this.upside,this.downside)
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    console.log("not correct")
  }
}

module.exports = BridgeGame;
