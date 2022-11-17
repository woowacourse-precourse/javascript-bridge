const Player = {
  size: null,
  movingArr: [],
  state: [[], []],
  tryingCount: 1,
  playerAns: [],
  gameSuccess: false,
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

    this.playerAns.push(isCorrect);
    const success = this.checkGameSuccess();
    return success;
  },
  updateSize(size) {
    this.size = size;
  },
  checkGameSuccess() {
    if (
      this.playerAns.length === this.size &&
      !this.playerAns.includes(false)
    ) {
      this.gameSuccess = true;
    }
  },
};

module.exports = Player;
