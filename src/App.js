const { Console } = require('@woowacourse/mission-utils');
const BridgeMaker = require('./BridgeMaker');
const InputView = require('./InputView')
const OutputView= require('./OutputView')

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
    console.log(this.#gameStatus)
    //OutputView.printMap(this.#gameStatus)
  }

  


}

module.exports = App;
