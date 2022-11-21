const OutputView = require("./OutputView");

class BridgeGame {
  constructor() {
    this.round = 0;
    this.crossing = true;
    this.success = false;
    this.attempt = 1;
    this.upResult = [];
    this.downResult = [];
  }

  setSuccess() {
    this.success = true;
  }

  getSuccess() {
    return this.success;
  }

  setAttempt() {
    this.attempt++;
  }

  getAttempt() {
    return this.attempt;
  }

  setCross(cross) {
    if (cross) this.crossing = true;
    else if (!cross) this.crossing = false;
  }

  getCross() {
    return this.crossing;
  }

  setRound(reset) {
    if (reset) this.round = 0;
    else {
      this.round++;
    }
  }

  getRound() {
    return this.round;
  }

  resetResult(reset) {
    this.upResult = [];
    this.downResult = [];
  }

  getUpResult() {
    return this.upResult;
  }

  getDownResult() {
    return this.downResult;
  }

  upMovement(bridgeUD, round) {
    if (bridgeUD[round] === "U") {
      this.upResult[round] = " O ";
      this.downResult[round] = "   ";
    } else {
      this.upResult[round] = " X ";
      this.downResult[round] = "   ";
      this.setCross(false);
    }
  }

  downMovement(bridgeUD, round) {
    if (bridgeUD[round] === "D") {
      this.upResult[round] = "   ";
      this.downResult[round] = " O ";
    } else {
      this.upResult[round] = "   ";
      this.downResult[round] = " X ";
      this.setCross(false);
    }
  }

  isSuccess(bridgeUD) {
    if (bridgeUD.length == this.getRound() && this.getCross() == true) {
      this.setSuccess();
    }
  }

  move(movement, bridge) {
    const bridgeUD = bridge.getBridge();
    let round = this.getRound();

    if (movement == "U") this.upMovement(bridgeUD, round);
    if (movement === "D") this.downMovement(bridgeUD, round);

    this.setRound();
    this.isSuccess(bridgeUD);
  }

  reset() {
    this.setRound(true);
    this.setCross(true);
    this.resetResult(true);
  }

  retry(restart) {
    if (restart === "R") {
      this.reset();
      this.setAttempt();
    }
  }
}

module.exports = BridgeGame;
