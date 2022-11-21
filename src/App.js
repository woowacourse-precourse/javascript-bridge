const { Console } = require('@woowacourse/mission-utils');
const BridgeMaker = require('./BridgeMaker');
const InputView = require('./InputView')

class App {

  #generatedBridge
  #gameStatus
  
  play(){
    this.makeBridge()
    this.startGame()
  }

  makeBridge(){
    this.#generatedBridge=InputView.readBridgeSize()
  }

  startGame(){
    this.#gameStatus={
      playerLocation:0,
      bridgeStatus:{
        up:[],
        down:[]
      },
      wrongFlag:false
    }
    this.playerMove() 
  }

  playerMove(){
    InputView.readMoving(this.#generatedBridge,this.#gameStatus)
  }

  


}

module.exports = App;
