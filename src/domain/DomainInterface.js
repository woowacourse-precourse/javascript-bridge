const Bridge = require('./Bridge');
const CurrentLocation = require('./CurrentLocation');
const TotalMovingCount = require('./TotalMovingCount');

const DomainInterface = class {
  constructor(bridge, currentLocation, totalMovingCount) {
    this.#bridge = bridge;
    this.#currentLocation = currentLocation;
    this.#totalMovingCount = totalMovingCount;
  }

  setBridgeLength(length) {
    this.#bridge.setBridgeLength(length);
  }

  moveOneStep() {
    this.#currentLocation.moveOneStep();
  }

  getCurrentLocation() {
    return this.#currentLocation.getCurrentLocation();
  }

  getBridgeLength() {
    return this.#bridge.getBridgeLength();
  }

  getPartialBridgeMap() {
    return this.#bridge.getPartialBridgeMap(
      this.#currentLocation.getCurrentLocation()
    );
  }

  isMovable(moving) {
    return this.#bridge.isMovable(
      moving,
      this.#currentLocation.getCurrentLocation()
    );
  }

  isEndOfBridge() {
    const currentLocation = this.getCurrentLocation();
    const bridgeLength = this.getBridgeLength();

    return currentLocation + 1 === bridgeLength;
  }
};

module.exports = DomainInterface;
