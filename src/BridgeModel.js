const GAME_SIGNATURE = require('./utils/constant');

class BridgeModel {
  constructor(bridge) {
    this.bridge = bridge;
    this.trialList = [];
  }

  move(direction) {
    this.updateTrialList(direction, this.getStage());
  }

  getStage() {
    return this.trialList.length;
  }

  getTrialResult(trialDirection, stage) {
    const answerDirection = this.bridge[stage];

    return answerDirection === trialDirection ? GAME_SIGNATURE.pass : GAME_SIGNATURE.fail;
  }

  updateTrialList(trialDirection, stage) {
    this.trialList.push({
      direction: trialDirection,
      result: this.getTrialResult(trialDirection, stage),
    });
  }
}

module.exports = BridgeModel;
