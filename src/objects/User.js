const OutputView = require("../views/OutputView");
const InputView = require("../views/InputView");
class User {
  #userBridge;
  constructor() {
    this.#userBridge = [];
  }
  makeTwoBridge(bridge) {
    const highBridge = bridge.map((direction) =>
      direction === "U" ? "O" : " "
    );
    const lowBridge = bridge.map((direction) =>
      direction === "D" ? "O" : " "
    );
    return [highBridge, lowBridge];
  }
  makeTwoErrorBridge(bridge) {
    console.log("dsdsdsds");
    const highBridge = bridge.map((direction, index) => {
      if (index === this.#userBridge.length - 1) {
        return direction === "U" ? "X" : " ";
      }
      return direction === "U" ? "O" : " ";
    });
    const lowBridge = bridge.map((direction, index) => {
      if (index === this.#userBridge.length - 1) {
        return direction === "D" ? "X" : " ";
      }
      return direction === "D" ? "O" : " ";
    });
    return [highBridge, lowBridge];
  }
  changeBridgeOutfit(highBridge, lowBridge) {
    const highBridgeOutfit = `[ ${highBridge.join(" | ")} ]`;
    const lowBridgeOutfit = `[ ${lowBridge.join(" | ")} ]`;
    return [highBridgeOutfit, lowBridgeOutfit];
  }
  mapBridge() {
    const [highBridge, lowBridge] = this.makeTwoBridge(this.#userBridge);
    return this.changeBridgeOutfit(highBridge, lowBridge);
  }
  mapErrorBridge(bridge) {
    const [highBridge, lowBridge] = this.makeTwoErrorBridge(bridge);
    return this.changeBridgeOutfit(highBridge, lowBridge);
  }
  move(direction, bridge) {
    this.#userBridge.push(direction);
  }
  isCorrectDirection(direction, bridge) {
    if (direction === bridge[this.#userBridge.length]) {
      return true;
    }
    return false;
  }
}
module.exports = User;
