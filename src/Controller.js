const { INITIAL_VALUE } = require("./constants");
const BridgeGame = require("./model/BridgeGame");
const { readBridgeSize, readMoving, readGameCommand } = require("./view/InputView");
const { printMap, printResult, printResultMap, printError } = require("./view/OutputView");

class Controller {
  #bridgeGame;
  #tryingNum;

  constructor() {
    this.#tryingNum = INITIAL_VALUE.TRY_NUM;
    this.init();
  }

  init() {
    readBridgeSize((bridgeSize)=>{
      try{
        this.#bridgeGame = new BridgeGame(Number(bridgeSize));
        this.play();
      }
      catch(error){
        printError(error);
        this.init();
      }
    });
  }

  play() {
    readMoving((moving) => {
      try{
        const isMatch = this.#bridgeGame.move(moving);
        this.showMap();
        this.handleBridgeGame(isMatch);
      }catch(error){
        printError(error);
        this.play();
      }
    });
  }

  showMap() {
    const map = this.#bridgeGame.result();
    printMap(map);
  }

  handleBridgeGame(isMatch){
    if(!isMatch){
      this.askReplay();
      return;
    }
    if(this.#bridgeGame.isEnd()){
      this.end(isMatch);
      return;
    }
    this.play();
  }

  askReplay(){
    readGameCommand((retry) => {
      try{
        if(this.#bridgeGame.retry(retry)){
          this.#tryingNum += 1;
          this.play();
        }
        this.end();
      }catch(error){
        printError(error);
        this.askReplay();
      }
    });
  }

  end(isMatch){
    printResultMap();
    this.showMap();
    printResult(isMatch, this.#tryingNum);
  }
}

module.exports = Controller;
