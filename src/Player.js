const Player = {
  size: null,
  tryingCount: 1,
  gameSuccess: false,
  playerAnswer: [],
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

    this.playerAnswer.push(correct);
    const success = this.checkGameSuccess();
    return success;
  },

  sizeUpdate(size) {
    this.size = size;
  },

  checkGameSuccess() {
    if (
      this.playerAnswer.length === this.size &&
      !this.playerAnswer.includes(false)
    ) {
      this.gameSuccess = true;
    }
  },

  reset() {
    this.state = [[], []];
    this.movingArr = [];
    this.playerAnswer = [];
    this.tryingCount += 1;
  },
};

module.exports = Player;
