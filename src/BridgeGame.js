const BridgeInformation = require("./BridgeInformation");
const { SIGN } = require("./Constants");

class BridgeGame {
  #movingRoute = [];
  #info;
  #tryCount = 1;
  #inputIndex = -1;

  constructor(size) {
    this.size = size;
    this.#info = new BridgeInformation(size);
  }

  changeState(direction) {
    this.#movingRoute.push(direction);
    this.#inputIndex += 1;
  }

  move(direction) {
    this.changeState(direction);
    this.#info.makeRouteMap(direction, this.#inputIndex);
    this.checkStatus();
  }

  checkStatus() {
    this.getRouteMap();
    this.checkWrongInput();
    this.checkSuccess();
  }

  retry() {}

  getMatchSize() {
    return this.#info.checkMatchLength(this.#movingRoute.length);
  }

  checkWrongInput() {
    return this.#info.getWrongRoute();
  }

  checkSuccess() {
    if (this.#info.successStatus(this.#movingRoute.length)) {
      this.#info.finishGame(this.#tryCount, SIGN.SUCCESS);
    }
  }
}

module.exports = BridgeGame;
