const BridgeMaker = require("./BridgeMaker.js")
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator.js")
const OutputView = require("./OutputView.js")
const Notice = require("./NoticeMessage.js")

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
  }

  checkBridgeCorrect(input){
    if(this.bridge[this.number] === input){
      return true
    }
  }

  checkBridgeAll(trynum){
    if(this.bridge.length === this.number){
      const result = Notice.SUCCESS
      OutputView.printResult(this.upside,this.downside,result, trynum)
      return false
    }
    return true
  }

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

  retry() {
    if (this.bridge[this.number] == "U"){
      this.upside.push(" ")
      this.downside.push("X")
    }
    else if(this.bridge[this.number] == "D"){
      this.upside.push("X")
      this.downside.push(" ")
    }
    OutputView.printMap(this.upside,this.downside)
  }
}

module.exports = BridgeGame;
