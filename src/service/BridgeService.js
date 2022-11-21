const BridgeStart = require('./domain/BridgeStart');
const BridgeRestart = require('./domain/BridgeRestart');
const BridgeUserMap = require('./domain/BridgeUserMap');
const BridgeDirection = require('./domain/BridgeDirection');
const BridgeFinalResult = require('./domain/BridgeFinalResult');

const BridgeRepository = require('../repository/BridgeRepository');

class BridgeService {
  #bridgeRepository;

  constructor() {
    this.#bridgeRepository = new BridgeRepository();
  }

  start(inputLength) {
    const bridgeStart = new BridgeStart({
      input: inputLength,
      repo: this.#bridgeRepository
    });

    bridgeStart.store();
  }

  recordMove(command) {
    const bridgeDirection = new BridgeDirection({
      input: command,
      repo: this.#bridgeRepository
    });

    bridgeDirection.store();
  }

  restart() {
    const bridgeRestart = new BridgeRestart({
      repo: this.#bridgeRepository
    });

    bridgeRestart.store();
  }

  getMoveResult() {
    const bridgeUserMap = new BridgeUserMap({
      repo: this.#bridgeRepository
    });

    return bridgeUserMap.getOutput();
  }

  getGameResult() {
    const bridgeFinalResult = new BridgeFinalResult({
      repo: this.#bridgeRepository
    });

    return bridgeFinalResult.getOutput();
  }
}

module.exports = BridgeService;
