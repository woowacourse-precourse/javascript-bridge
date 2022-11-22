const { GAME_SIGNATURE } = require('./utils/constant');

class BridgeGame {
  #bridge;
  #trials;
  #trialCount;
  #status;
  constructor() {
    this.trialCount = 1;
    this.status = GAME_SIGNATURE.gameOn;
    this.trials = [];
  }

  setBridge(bridge) {
    this.bridge = bridge;
  }

  move(direction) {
    this.updateTrialList(direction, this.getCurrentStage());
    this.updateStatus();
  }

  updateStatus() {
    const lastTrial = this.getLastTrial();

    if (this.isGameSuccess(lastTrial)) this.status = GAME_SIGNATURE.gameSuccess;
    if (this.isGameFailed(lastTrial)) this.status = GAME_SIGNATURE.gameFail;
  }

  getLastTrial() {
    return [...this.trials].pop();
  }

  isGameSuccess(lastTrial) {
    return lastTrial.result === GAME_SIGNATURE.pass && this.trials.length === this.bridge.length;
  }

  isGameFailed(lastTrial) {
    return lastTrial.result === GAME_SIGNATURE.fail;
  }

  getCurrentStage() {
    return this.trials.length;
  }

  getTrialResult(trialDirection, stage) {
    const answerDirection = this.bridge[stage];
    return answerDirection === trialDirection ? GAME_SIGNATURE.pass : GAME_SIGNATURE.fail;
  }

  updateTrialList(movingDirection, stage) {
    this.trials.push({
      direction: movingDirection,
      result: this.getTrialResult(movingDirection, stage),
    });
  }

  retry() {
    this.trialCount += 1;
    this.trials = [];
    this.status = GAME_SIGNATURE.gameOn;
  }
}

module.exports = BridgeGame;
