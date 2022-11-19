const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const BridgeMaker = require("./BridgeMaker");

class BridgeGame {
  #bridge;
  #movings = [];
  #trialCount = 1;

  constructor(size) {
    this.validateBridgeSize(size);
    this.#bridge = BridgeMaker.makeBridge(size, BridgeRandomNumberGenerator.generate);
  }

  validateBridgeSize(size) {
    if (this.isInvalidBridgeSize(size)) {
      throw new Error("[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.");
    }
  }

  validateMoving(moving) {
    if (this.isInvalidMoving(moving)) {
      throw new Error("[ERROR] 위로 이동하려면 U, 아래로 이동하려면 D를 입력해야 합니다.");
    }
  }

  validateGameCommand(gameCommand) {
    if (this.isInvalidGameCommand(gameCommand)) {
      throw new Error("[ERROR] 재시도하려면 R, 종료하려면 Q를 입력해야 합니다.");
    }
  }

  isInvalidBridgeSize(size) {
    return Number.isNaN(size) || !Number.isInteger(size) || size < 3 || size > 20;
  }

  isInvalidMoving(moving) {
    return moving !== "U" && moving !== "D";
  }

  isInvalidGameCommand(gameCommand) {
    return gameCommand !== "R" && gameCommand !== "Q";
  }

  move(moving) {
    this.validateMoving(moving);
    this.#movings.push(moving);
  }

  retry(gameCommand) {
    this.validateGameCommand(gameCommand);
    if (gameCommand === "Q") {
      return false;
    }
    this.#movings = [];
    this.#trialCount += 1;
    return true;
  }

  getMap(line) {
    const marks = this.#movings.map((moving, index) => {
      if (moving === line && this.#bridge[index] === line) return "O";
      if (moving === line && this.#bridge[index] !== line) return "X";
      return " ";
    });
    const map = `[ ${marks.join(" | ")} ]`;
    return map;
  }

  getResult() {
    const hasMovedCorrectly = this.#movings.every((moving, index) => moving === this.#bridge[index]);
    const hasMovedAllBridge = this.#movings.length === this.#bridge.length;
    if (!hasMovedCorrectly) return "실패";
    if (hasMovedCorrectly && hasMovedAllBridge) return "성공";
    if (hasMovedCorrectly && !hasMovedAllBridge) return "진행중";
  }

  getTrialCount() {
    return this.#trialCount;
  }
}

module.exports = BridgeGame;
