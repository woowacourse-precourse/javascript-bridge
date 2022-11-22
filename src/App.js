const { Console } = require('@woowacourse/mission-utils');
const BridgeGame = require('./BridgeGame');
const BridgeMaker = require('./BridgeMaker');
const { generate } = require('./BridgeRandomNumberGenerator');
const InputView = require('./InputView');
const OutputView = require('./OutputView');

class App {

  constructor() {
    this.bridgeGame = null;
  }
  play() {
      OutputView.printStart();
      this.getBridgeSize();
      this.getKey();
  }
  getBridgeSize(){
    InputView.readBridgeSize((size) => {
      const bridge = BridgeMaker.makeBridge(Number(size), generate);
      this.bridgeGame = new BridgeGame(bridge);
    });
  }
  getKey(){
    InputView.readMoving((key) =>{
      this.bridgeGame.move(key)
      OutputView.printMap(this.bridgeGame.getMyWay());
      if(!this.bridgeGame.isRightWay()) 
        return this.getGameCommand();      
      if(this.bridgeGame.isLast())
        return this.quit();
      return this.getKey();
    });
  }
  getGameCommand(){
    InputView.readGameCommand((command) => {
      if(command === 'R') return this.restart();
      if(command === 'Q') return this.quit();
    });
  }
  restart(){
    this.bridgeGame.retry();
    this.getKey();
  }
  quit() {
    const isSuccess = (this.bridgeGame.isRightWay() && this.bridgeGame.isLast());
    OutputView.printResult(this.bridgeGame.getMyWay(),isSuccess,this.bridgeGame.getAttepts());
    Console.close();
  }
}

const app = new App();
app.play();

module.exports = App;
