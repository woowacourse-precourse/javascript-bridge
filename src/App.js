const InputView = require('./InputView');
const OutputView = require('./OutputView')
const BridgeMaker = require('./BridgeMaker');
const BridgeGame = require('./BridgeGame');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');

class App {
  #bridge;

  play() {
   this.init();
   this.gameStart([], 1);
  }

  init() {
    OutputView.printInit();
    const bridgeLength = InputView.readBridgeSize();
    console.log(bridgeLength);
    this.#bridge = BridgeMaker.makeBridge(bridgeLength, BridgeRandomNumberGenerator.generate);
    this.bridgeGame = new BridgeGame();
  }

  gameStart(moves, count){
    OutputView.printInput();
    const move = InputView.readMoving();
    moves += move;
    var isSuccess = this.bridgeGame.move(this.#bridge, moves);
    OutputView.printMap(this.#bridge, moves);
    if(isSuccess) {
      if(this.#bridge.length != moves.length) this.gameStart(moves, count);
      if(this.#bridge.length == moves.length) OutputView.printResult(true, this.#bridge, moves, count);
    }
    if(!isSuccess){
      const command = this.bridgeGame.retry( InputView.readGameCommand() );
      if(command){
        this.bridgeGame = new BridgeGame();
        this.gameStart([], count+1);
      }
      if(!command) OutputView.printResult(false, this.#bridge, moves, count);
    }
  }
}

const app = new App();
app.play();

module.exports = App;