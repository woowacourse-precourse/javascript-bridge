class BridgeGame {
  constructor() {
    this.round = 0;
    this.totalGame = 0;
    this.up = [];
    this.down = [];
  }

  move() {
    this.round++;

    return this.round;
  }
  
  retry() {
    this.round = 0;
    this.up = [];
    this.down = [];

    return this.round;
  }
}

module.exports = BridgeGame;
