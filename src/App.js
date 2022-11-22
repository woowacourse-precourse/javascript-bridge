const { Console } = require('@woowacourse/mission-utils');
const { RESULT } = require('./constants/messages');
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
      wrongFlag:false,
      tryCount:1
    }
    this.playerMove() 
  }

  printBridge(){
    OutputView.printMap(this.#gameStatus)
  }


  playerMove(){
    while(this.#gameStatus.playerLocation!==this.#generatedBridge.length){
      InputView.readMoving(this.#generatedBridge,this.#gameStatus)
      this.printBridge()
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
      this.startAgain()
    }
  }

  startAgain(){
    let getNextCount=(this.#gameStatus.tryCount+1)
    this.#gameStatus={
      playerLocation:0,
      bridgeStatus:{
        up:[],
        down:[]
      },
      wrongFlag:false,
      tryCount:getNextCount
    }
    this.playerMove() 
  }

  endGame(){
    Console.print(RESULT.GAME_RESULT_PRINT)
    this.printBridge()
    Console.print(RESULT.GAME_RESULT_SUCCESS)
    if(this.#gameStatus.wrongFlag) Console.print(RESULT.GAME_FAIL)
    if(!this.#gameStatus.wrongFlag) Console.print(RESULT.GAME_SUCCESS)
    Console.print(RESULT.GAME_COUNT)
    Console.print(this.#gameStatus.tryCount)
  }  


}

module.exports = App;
