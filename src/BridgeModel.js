const GAME_SIGNATURE = require('./utils/constant');

class BridgeModel {
  constructor(bridge) {
    this.bridge = bridge;
    this.trialCount = 1;
    this.trials = [];
    this.status = GAME_SIGNATURE.gameOn;
  }

  move(direction) {
    this.updateTrialList(direction, this.getStage());
    this.checkStatus();
  }

  checkStatus() {
    const lastTrial = [...this.trials].pop();

    if (lastTrial.result === GAME_SIGNATURE.pass && this.trials.length === this.bridge.length) {
      this.status = GAME_SIGNATURE.gameSuccess;
      return;
    }

    if (lastTrial.result === GAME_SIGNATURE.fail) {
      this.status = GAME_SIGNATURE.gameFail;
      return;
    }

    this.status = GAME_SIGNATURE.gameOn;
  }

  getStage() {
    return this.trials.length;
  }

  getTrialResult(trialDirection, stage) {
    const answerDirection = this.bridge[stage];

    return answerDirection === trialDirection ? GAME_SIGNATURE.pass : GAME_SIGNATURE.fail;
  }

  updateTrialList(trialDirection, stage) {
    this.trials.push({
      direction: trialDirection,
      result: this.getTrialResult(trialDirection, stage),
    });
  }
}

module.exports = BridgeModel;
