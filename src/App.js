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
  }//맨 처음 시작할때만 이렇게 하고 재시도 할때는 횟수때문에 
  //이거쓰지 말고 따로 초기화 해야 함
  

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
    OutputView.printMap(this.#gameStatus)
    Console.print(RESULT.GAME_RESULT_SUCCESS)
    if(this.#gameStatus.wrongFlag) Console.print(RESULT.GAME_FAIL)
    if(!this.#gameStatus.wrongFlag) Console.print(RESULT.GAME_SUCCESS)
    Console.print(RESULT.GAME_COUNT)
    Console.print(this.#gameStatus.tryCount)
  }  


}

module.exports = App;
