const BridgeRepository = require('../repository/BridgeRepository');
const BridgeFinalResult = require('./domain/BridgeCheck');
const BridgeStart = require('./domain/BridgeStart');
const BridgeRestart = require('./domain/BridgeRestart');
const UpDownKey = require('./domain/UpDownKey');
const BridgeUserMap = require('./domain/BridgeUserMap');

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

    bridgeStart.doAction();
  }

  recordMove(command) {
    const upDownKey = new UpDownKey({
      input: command,
      repo: this.#bridgeRepository
    });

    upDownKey.doAction();
  }

  getMoveResult() {
    const bridgeCheck = new BridgeUserMap({
      repo: this.#bridgeRepository
    });

    return bridgeCheck.getOutput();
  }

  getGameResult() {
    const bridgeCheck = new BridgeFinalResult({
      repo: this.#bridgeRepository
    });

    return bridgeCheck.getOutput();
  }

  restart() {
    const bridgeRestart = new BridgeRestart({
      repo: this.#bridgeRepository
    });

    bridgeRestart.doAction();
  }
}

module.exports = BridgeService;
