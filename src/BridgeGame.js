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

  setUpResult(reset, round, correct) {
    if (reset) this.upResult = [];
    else {
      if (correct) this.upResult[round] = " O ";
      else {
        this.upResult[round] = " X ";
        this.setCross(false);
      }
    }
  }

  setDownResult(reset, round, correct) {
    if (reset) this.downResult = [];
    else {
      if (correct) this.downResult[round] = " O ";
      else {
        this.downResult[round] = " X ";
        this.setCross(false);
      }
    }
  }

  getUpResult() {
    return this.upResult;
  }

  getDownResult() {
    return this.downResult;
  }

  upMovement(movement, bridgeUD, round) {
    if (movement == bridgeUD[round]) {
      this.setUpResult(false, round, true);
      this.downResult.push("   ");
    } else {
      this.setUpResult(false, round, false);
      this.downResult.push("   ");
      this.setCross(false);
    }
  }

  downMovement(movement, bridgeUD, round) {
    if (movement == bridgeUD[round]) {
      this.setDownResult(false, round, true);
      this.upResult.push("   ");
    } else {
      this.setDownResult(false, round, false);
      this.upResult.push("   ");
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

    if (movement == "U") this.upMovement(movement, bridgeUD, round);
    if (movement === "D") this.downMovement(movement, bridgeUD, round);

    this.setRound();
    this.isSuccess(bridgeUD);
  }

  reset() {
    this.setRound(true);
    this.setCross(true);
    this.setUpResult(true);
    this.setDownResult(true);
  }

  retry(restart) {
    if (restart === "R") {
      this.reset();
      this.setAttempt();
    }
  }
}

module.exports = BridgeGame;
