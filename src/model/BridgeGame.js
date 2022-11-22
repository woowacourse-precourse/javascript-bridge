const Bridge = require("./Bridge");

class BridgeGame extends Bridge {
  move(moving, crosserLocation) {
    const correct = this.checkCorrect(crosserLocation);
    const result = moving === correct ? 'success' : 'failure';
    return result;
  }

  checkCorrect(crosserLocation) {
    const correct = this.bridge[crosserLocation];
    return correct;
  }

  endCheck(state) {
    const currentStatus = this.bridge.length === state.location ? 'end' : 'notYet';
    return currentStatus;
  }

  retry(retry) {
    if(retry === 'R') return 'reset';
    return 'end';
  }
}

module.exports = BridgeGame;
