const { INITIAL_VALUE } = require("./constants");
const { OUTPUT_MESSAGE } = require("./constants/OutputMessage");
const BridgeGame = require("./model/BridgeGame");
const { readBridgeSize, readMoving, readGameCommand } = require("./view/InputView");
const { printMap, printResult, printMessage } = require("./view/OutputView");

class Controller {
  #bridgeGame;
  #tryingNum;

  constructor() {
    this.#tryingNum = INITIAL_VALUE.TRY_NUM;
    printMessage(OUTPUT_MESSAGE.START_GAME);
    this.init();
  }

  init() {
    readBridgeSize((bridgeSize)=>{
      try{
        this.#bridgeGame = new BridgeGame(Number(bridgeSize));
        this.play();
      }
      catch(error){
        printMessage(error.message);
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
        printMessage(error.message);
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
        const isRetry = this.#bridgeGame.retry(retry);
        if(isRetry){
          this.#tryingNum += 1;
          this.play();
          return;
        }
        this.end();
      }catch(error){
        printMessage(error.message);
        this.askReplay();
      }
    });
  }

  end(isMatch){
    const map = this.#bridgeGame.result();
    printResult(isMatch, this.#tryingNum, () => printMap(map));
  }
}

module.exports = Controller;
