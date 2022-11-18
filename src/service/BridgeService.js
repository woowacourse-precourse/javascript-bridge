const BridgeRepository = require('../repository/BridgeRepository');
const BridgeLength = require('./domain/BridgeLength');
const UpDownKey = require('./domain/UpDownKey');

class BridgeService {
  #bridgeRepository;

  constructor() {
    this.#bridgeRepository = new BridgeRepository();
  }

  start(inputLength) {
    const bridgeLength = new BridgeLength({
      input: inputLength,
      repo: this.#bridgeRepository
    });

    bridgeLength.doAction();
  }

  recordMove(command) {
    const upDownKey = new UpDownKey({
      input: command,
      repo: this.#bridgeRepository
    });

    upDownKey.doAction();
  }

  // test를 위한 getter
  getRepo(key) {
    return this.#bridgeRepository.read(key);
  }
}

module.exports = BridgeService;
