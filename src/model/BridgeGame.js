const Bridge = require("./Bridge");

class BridgeGame extends Bridge {
  move(moving) {
    const result = this.checkAnswer(moving)
    this.updateState(moving, result);
    return result;
  }

  checkAnswer(moving) {
    const currentLocation = this.movingState.currentLocation
    const correct = this.bridge[currentLocation];

    return correct === moving ? true : false
  }

  retry(answer) {
    if(answer === 'R') {
      this.resetMovingState();
      return true;
    }
    return false;
  }
}

module.exports = BridgeGame;
