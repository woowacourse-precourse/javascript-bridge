const {readBridgeSize, readMoving, readGameCommand} = require("./InputView");
const {gameStart,printMap, printResult, printError} = require("./OutputView");
const BridgeGame = require("./BridgeGame") ;

class App {
  constructor(){
    this.bridgeGame = new BridgeGame()
  }
  /**
   * 게임 play
   */
   play() {
    gameStart() ;
    readBridgeSize( (input) => {
      this.bridgeGame.makeRandomBridge(input);
      this.movingBridge() ;
    }) ;
  }

  /**
   * User에게 UD을 받아서 전진하기 ~ 끝까지
   */
  movingBridge() {
      readMoving(this.readMovingCallback)
  }

  /**
   * readMoving 안에 들어가는 콜백함수
   */
   readMovingCallback = (input) => {
    let goStop = this.bridgeGame.move(input) ;
    printMap(this.bridgeGame.printMap) ;
    if ( goStop == "Go") {
      this.movingBridge() ;
      if (this.bridgeGame.success()== "Success") printResult(this.bridgeGame.printMap, this.bridgeGame.tryCount, "Success") ;
      return ;
    } 
    this.askRetryFail() ;
  }

  /**
   * 다시 할 것인지 물어보고 처리하는 함수
   */
   askRetryFail(){
    readGameCommand((input) => {
      let retryFail =  this.bridgeGame.retry(input)
      if (retryFail == "Retry") this.movingBridge() ;
      else printResult(this.bridgeGame.printMap, this.bridgeGame.tryCount, "Fail")
    })
  }

}

module.exports = App;
