const Player = {
  movingArray: [],
  state: [[], []],
  stateUpdate(move, correct) {
    if (move === "U" && correct) {
      this.state[0].push(" O ");
      this.state[1].push("   ");
    }
    if (move === "U" && !correct) {
      this.state[0].push(" X ");
      this.state[1].push("   ");
    }
    if (move === "D" && correct) {
      this.state[0].push("   ");
      this.state[1].push(" O ");
    }
    if (move === "D" && !correct) {
      this.state[0].push("   ");
      this.state[1].push(" X ");
    }
  },
};

module.exports = Player;
