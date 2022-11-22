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
    while(this.#gameStatus.playerLocation!==this.#generatedBridge.length){
      InputView.readMoving(this.#generatedBridge,this.#gameStatus)
      OutputView.printMap(this.#gameStatus)
      if(this.#gameStatus.wrongFlag){
       this.chooseWrong()
      }
    }
    this.endGame()
  }

  
  chooseWrong(){
    InputView.readGameCommand(this.#gameStatus)
    if(this.#gameStatus.wrongFlag){
      this.endGame()
    }
    if(!this.#gameStatus.wrongFlag){
      this.startGame()
    }
  }

  endGame(){

  }  


}

module.exports = App;
