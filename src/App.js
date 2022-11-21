const { Console } = require('@woowacourse/mission-utils');
const BridgeMaker = require('./BridgeMaker');
const InputView = require('./InputView')

class App {

  #generatedBridge

  
  play(){
    this.makeBridge()
    this.playerMove()
  }

  makeBridge(){
    this.#generatedBridge=InputView.readBridgeSize()
  }

  playerMove(){
    InputView.readMoving()
  }

  


}

module.exports = App;
