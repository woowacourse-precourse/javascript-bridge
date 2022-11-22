const BridgeGame = require('./model/domainmodel/BridgeGame');
const GameCount = require('./model/domainmodel/GameCount');
const getSize = require('./controller/gameStart/gameStart');
const { makeBridge } = require('./BridgeMaker');
const { generate } = require('./BridgeRandomNumberGenerator');
const gameProcess = require('./controller/gameProcess/gameProcess');
const ifRetryorEnd = require('./controller/gameRetry/gameRetry');
const { printWinResult, printLoseResult } = require('./view/OutputView');

class App {
  constructor() {
    this.bridgesize = getSize();
    this.bridgegame = new BridgeGame();
    this.bridge = makeBridge(this.bridgesize, generate);
    this.bridgeindex = 0;
    this.gameCount = new GameCount(1);
  }

  winflag() {
    if (this.bridgeindex === Number(this.bridgesize)) {
      printWinResult(this.bridgegame, this.gameCount.getgameCount());
    }
  }

  play() {
    while (this.bridgeindex < this.bridgesize) {
      if (
        gameProcess(this.bridgegame, this.bridgeindex, this.bridge) === true
      ) {
        this.bridgeindex += 1;
      } else if (ifRetryorEnd(this.bridgegame, this.bridgeindex) === false) {
        printLoseResult(this.bridgegame, this.gameCount.getgameCount());
        break;
      } else {
        this.bridgeindex = 0;
      }
    }
    this.winflag();
  }
}

module.exports = App;
