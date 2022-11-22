const {readBridgeSize, readMoving, readGameCommand} = require("./InputView");
const {printMap, printResult, gameStart, printError} = require("./OutputView");
const BridgeGame = require("./BridgeGame");

class App {
  constructor(){
    this.bridgeGame = new BridgeGame()
  }
  
  play() {
    gameStart();
    readBridgeSize( (input) => {
      this.bridgeGame.makeRandomBridge(input);
      readMoving(this.readMovingCallback);
    });
  }

  readMovingCallback = (input) => {
    let goStop = this.bridgeGame.move(input);
    printMap(this.bridgeGame.printMap);
    if (goStop == "Go") {
      //this.movingBridge();
      readMoving(this.readMovingCallback);
      if (this.bridgeGame.success()== "Success") printResult(this.bridgeGame.printMap, this.bridgeGame.trialCount, "Success");
      return;
    } 
    this.askRetry();
  }

  askRetry(){
    readGameCommand((input) => {
      let retryQuit =  this.bridgeGame.retry(input)
      if (retryQuit == "Retry") readMoving(this.readMovingCallback);
      else printResult(this.bridgeGame.printMap, this.bridgeGame.trialCount, "Quit")
    })
  }
};

module.exports = App;