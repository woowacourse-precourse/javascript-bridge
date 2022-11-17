const Player = {
  movingArr: [],
  state: [[], []],
  updateState(wantGo, isCorrect) {
    if (wantGo === "U" && isCorrect) {
      this.state[0].push(" O ");
      this.state[1].push("   ");
    }

    if (wantGo === "U" && !isCorrect) {
      this.state[0].push(" X ");
      this.state[1].push("   ");
    }

    if (wantGo === "D" && isCorrect) {
      this.state[0].push("   ");
      this.state[1].push(" O ");
    }

    if (wantGo === "D" && !isCorrect) {
      this.state[0].push("   ");
      this.state[1].push(" X ");
    }
  },
};

module.exports = Player;
