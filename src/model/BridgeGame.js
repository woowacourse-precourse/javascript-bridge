const { BRIDGE } = require("../utils/constants");
class BridgeGame {
  #array = Array.from({ length: 2 }, () => []);
  #rightAnswer;

  move(bridge, input) {
    switch (input) {
      case BRIDGE.UP:
        this.moveUpSide(bridge);
        break;
      case BRIDGE.DOWN:
        this.moveDownSide(bridge);
        break;
    }
    return [this.#array[0], this.#array[1], this.#rightAnswer];
  }

  moveUpSide(bridge) {
    bridge[this.#array[0].length] === BRIDGE.UP
      ? this.moveRightUp()
      : this.moveWrongUp();
  }

  moveDownSide(bridge) {
    bridge[this.#array[0].length] === BRIDGE.DOWN
      ? this.moveRightDown()
      : this.moveWrongDown();
  }

  moveRightUp() {
    this.#array[0].push(BRIDGE.MOVABLE);
    this.#array[1].push(BRIDGE.UNSELECTED);
    this.#rightAnswer = true;
  }

  moveWrongUp() {
    this.#array[0].push(BRIDGE.IMMOVABLE);
    this.#array[1].push(BRIDGE.UNSELECTED);
    this.#rightAnswer = false;
  }

  moveWrongDown() {
    this.#array[0].push(BRIDGE.UNSELECTED);
    this.#array[1].push(BRIDGE.IMMOVABLE);
    this.#rightAnswer = false;
  }

  moveRightDown() {
    this.#array[0].push(BRIDGE.UNSELECTED);
    this.#array[1].push(BRIDGE.MOVABLE);
    this.#rightAnswer = true;
  }

  retry() {
    this.#array[0] = [];
    this.#array[1] = [];
    this.#rightAnswer = false;
  }
}

module.exports = BridgeGame;
