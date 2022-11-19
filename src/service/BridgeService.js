const BridgeRepository = require('../repository/BridgeRepository');
const BridgeCheck = require('./domain/BridgeCheck');
const BridgeStart = require('./domain/BridgeStart');
const BridgeRestart = require('./domain/BridgeRestart');
const UpDownKey = require('./domain/UpDownKey');

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
    const bridgeCheck = new BridgeCheck({
      repo: this.#bridgeRepository
    });

    return bridgeCheck.getUserBridgeState();
  }

  getGameResult() {
    const bridgeCheck = new BridgeCheck({
      repo: this.#bridgeRepository
    });

    return bridgeCheck.getGameState();
  }

  restart() {
    const bridgeRestart = new BridgeRestart({
      repo: this.#bridgeRepository
    });

    bridgeRestart.doAction();
  }

  // test를 위한 getter
  getRepo(key) {
    return this.#bridgeRepository.read(key);
  }
}

module.exports = BridgeService;
