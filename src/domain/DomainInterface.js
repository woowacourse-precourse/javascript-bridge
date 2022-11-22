const Bridge = require('./Bridge');
const CurrentStatus = require('./CurrentStatus');
const TotalMovingCount = require('./TotalMovingCount');

const DomainInterface = class {
  #bridge;
  #currentStatus;
  #totalMovingCount;

  constructor() {
    this.#bridge = new Bridge();
    this.#currentStatus = new CurrentStatus();
    this.#totalMovingCount = new TotalMovingCount();
  }

  getTotalMovingCount() {
    return this.#totalMovingCount.getTotalMovingCount();
  }

  setIsAlive(status) {
    this.#currentStatus.setIsAlive(status);
  }

  isAlive() {
    return this.#currentStatus.isAlive();
  }

  resetCurrentLocation() {
    this.#currentStatus.resetCurrentLocation();
  }

  addMovingCount() {
    this.#totalMovingCount.addMovingCount();
  }

  setBridgeLength(length) {
    this.#bridge.setBridgeLength(length);
  }

  moveOneStep() {
    this.#currentStatus.moveOneStep();
  }

  getCurrentLocation() {
    return this.#currentStatus.getCurrentLocation();
  }

  getBridgeLength() {
    return this.#bridge.getBridgeLength();
  }

  getPartialBridgeMap() {
    return this.#bridge.getPartialBridgeMap(
      this.#currentStatus.getCurrentLocation()
    );
  }

  isMovable(moving) {
    return this.#bridge.isMovable(
      moving,
      this.#currentStatus.getCurrentLocation()
    );
  }

  isEndOfBridge() {
    const currentLocation = this.#currentStatus.getCurrentLocation();
    const bridgeLength = this.#bridge.getBridgeLength();

    return currentLocation + 1 === bridgeLength;
  }
};

module.exports = DomainInterface;
