const {readBridgeSize, readMoving, readGameCommand} = require("./InputView");
const {gameStart,printMap, printResult, printError} = require("./OutputView");
const BridgeGame = require("./BridgeGame") ;

class App {
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

  readMovingCallback = (input) => {
    
  }

}

module.exports = App;
