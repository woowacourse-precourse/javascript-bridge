/**
 * this class depends on the Interactor interface
 * - bridgeInteractor
 * - userInteractor
 */
class JudgeInteractor {
  #bridge;
  #user;

  constructor(userInteractor, bridgeInteractor) {
    this.#user = userInteractor;
    this.#bridge = bridgeInteractor;
  }

  judge() {
    const userLocation = this.#user.getLocation();
    const BridgeSpace = this.#bridge.getSpace(userLocation);
    return BridgeSpace === this.#user.getCurrentDirection();
  }

  isSucceed() {
    return this.#bridge.getSize() === this.#user.getLocation();
  }
}

module.exports = JudgeInteractor;
