const { PlayerConstants } = require("./constant/Constants");

const Player = {
  size: null,
  movingArr: [],
  state: [[], []],
  tryingCount: PlayerConstants.INITIAL_TRY_NUMBER,
  playerAns: [],
  gameSuccess: PlayerConstants.GMAE_FAIL,

  updateState(wantGo, isCorrect) {
    if (wantGo === PlayerConstants.UPPER_BRIDGE_STRING && isCorrect) {
      this.state[0].push(PlayerConstants.CORRECT_ANSWER);
      this.state[1].push(PlayerConstants.EMPTY_ANSWER);
    }

    if (wantGo === PlayerConstants.UPPER_BRIDGE_STRING && !isCorrect) {
      this.state[0].push(PlayerConstants.WRONG_ANSWER);
      this.state[1].push(PlayerConstants.EMPTY_ANSWER);
    }

    if (wantGo === PlayerConstants.LOWER_BRIDGE_STRING && isCorrect) {
      this.state[0].push(PlayerConstants.EMPTY_ANSWER);
      this.state[1].push(PlayerConstants.CORRECT_ANSWER);
    }

    if (wantGo === PlayerConstants.LOWER_BRIDGE_STRING && !isCorrect) {
      this.state[0].push(PlayerConstants.EMPTY_ANSWER);
      this.state[1].push(PlayerConstants.WRONG_ANSWER);
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
      this.gameSuccess = PlayerConstants.GAME_SUCCESS;
    }
  },

  reset() {
    this.state = [[], []];
    this.movingArr = [];
    this.playerAns = [];
    this.tryingCount += PlayerConstants.INCREASE_TRY_NUMBER;
  },
};

module.exports = Player;
