const Bridge = require('./Bridge');
const RoundProcess = require('./RoundProcess');

class BridgeGame {
  #makeBridge;
  #roundProcess;
  #tryCount;
  #bridge;
  #roundInfo;

  constructor() {
    this.#makeBridge = new Bridge();
    this.#roundProcess = new RoundProcess();
    this.#tryCount = 1;
    this.#bridge = [];
    this.#roundInfo = [];
  }

  createBridge(size) {
    this.#bridge = this.#makeBridge.make(size);
  }

  move(userInput) {
    this.#roundInfo.push(userInput);
    const [correctChoice, UserIsWinner] = this.#roundProcess.checkProcess(
      this.#bridge,
      this.#roundInfo
    );
    return [correctChoice, UserIsWinner];
  }

  retry(command) {
    if (command === 'R') {
      this.#roundInfo = [];
      this.#tryCount += 1;
      return true;
    }
    return false;
  }

  getGameInfo() {
    return [this.#roundInfo, this.#bridge, this.#tryCount];
  }

  getRoundInfo() {
    return this.#roundInfo;
  }
  
  getTryCount() {
    return this.#tryCount;
  }
}

module.exports = BridgeGame;
