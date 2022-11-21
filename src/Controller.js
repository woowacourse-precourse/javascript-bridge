const BridgeGame = require("./BridgeGame");
const { readBridgeSize, readMoving, readGameCommand } = require("./InputView");
const { printMap } = require("./OutputView");

class Controller {
  #bridgeGame;
  #tryingNum;

  constructor() {
    this.init();
    this.#tryingNum = 1;
  }
  init() {
    readBridgeSize((bridgeSize)=>{
      this.#bridgeGame = new BridgeGame(Number(bridgeSize));
      this.play();
    });
  }
  play() {
    readMoving((moving) => {
      const isMatch = this.#bridgeGame.move(moving);
      this.showResult(moving);
      this.handleBridgeGame(isMatch);
    })
  }
  showResult(moving) {
    const upMap = this.#bridgeGame.getMap(true, moving);
    const downMap = this.#bridgeGame.getMap(false, moving);
    printMap(upMap);
    printMap(downMap);
  }
  handleBridgeGame(isMatch){
    if(!isMatch){
      this.askReplay();
      return;
    }
    this.play();
  }
  askReplay(){
    readGameCommand((retry) => {
      if(retry === 'R'){
        this.#tryingNum += 1;
        this.#bridgeGame.retry();
        this.play();
      }
    })
  }
  end(){
  }
}

module.exports = Controller;