const { Console } = require('@woowacourse/mission-utils');
const BridgeGame = require('./BridgeGame');
const BridgeMaker = require('./BridgeMaker');
const { generate } = require('./BridgeRandomNumberGenerator');
const InputView = require('./InputView');
const OutputView = require('./OutputView');
const Validation = require('./Validation');
const {ERROR_MESSAGE, KEY_VALUE, WAY} = require('./constant');
const { RESTART_KEY, QUIT_KEY} = KEY_VALUE;

class App {

  constructor() {
    this.bridgeGame = null;
  }
  play() {
      OutputView.printStart();
      this.getBridgeSize();
  }
  getBridgeSize(){
    InputView.readBridgeSize((size) => {

      const { errorMsg } = Validation.checkBridgeSize(size);
      if(errorMsg) {
        Console.print(errorMsg);
        return this.getBridgeSize();
      }
      const bridge = BridgeMaker.makeBridge(Number(size), generate);
      this.bridgeGame = new BridgeGame(bridge);
      this.getKey();
    });
  }
  getKey(){
    InputView.readMoving((key) =>{
      const { errorMsg } = Validation.checkDirection(key);
      if(errorMsg) {
        Console.print(errorMsg);
        return this.getKey();
      }
      this.bridgeGame.move(key);
      OutputView.printMap(this.bridgeGame.myWayToOX(key));
      if(this.bridgeGame.isWrongWay(key)) return this.getGameCommand(key);
      if(this.bridgeGame.isLast()) return this.quit(key);
      return this.getKey();
    });
  }
  getGameCommand(key){
    InputView.readGameCommand((command) => {
      if(command === RESTART_KEY) return this.restart();
      if(command === QUIT_KEY) return this.quit(key);
    });
  }
  restart(){
    this.bridgeGame.retry();
    this.getKey();
  }
  quit(key) {
    const isSuccess = (!this.bridgeGame.isWrongWay(key) && this.bridgeGame.isLast());
    OutputView.printResult(this.bridgeGame.myWayToOX(key),isSuccess,this.bridgeGame.getAttempts());
    Console.close();
  }
}

module.exports = App;
