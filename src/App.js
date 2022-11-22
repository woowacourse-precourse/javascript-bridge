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
      if(!this.bridgeGame.isRightWay()) ;
      //다시할건지 끝낼건지
      
      if(this.bridgeGame.isLast()) ;
      //끝내기
      return this.getKey();
    });
  }
  getGameCommand(){
    InputView.readGameCommand((command) => {
      if(command === 'R') ; //다시하기
      if(command === 'Q'); //끝내기
    })
  }
}

const app = new App();
app.play();

module.exports = App;
