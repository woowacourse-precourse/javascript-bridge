const {
  AnswerConstants,
  PlayerInputConstants,
  PlayerConstants,
} = require("./constant/Constants");

const Player = {
  size: null,
  movingArr: [],
  state: [[], []],
  tryingCount: PlayerConstants.INITIAL_TRY_NUMBER,
  playerAns: [],
  gameSuccess: PlayerConstants.GMAE_FAIL,

  updateState(wantGo, isCorrect) {
    this.calculateBridgeState(wantGo, isCorrect);
    this.playerAns.push(isCorrect);

    this.checkGameSuccess();
  },

  calculateBridgeState(wantGo, isCorrect) {
    this.checkUpperBridgeCorrect(wantGo, isCorrect);

    this.checkUpperBridgeWrong(wantGo, isCorrect);

    this.checkLowerBridgeCorrect(wantGo, isCorrect);

    this.checkLowerBridgeWrong(wantGo, isCorrect);
  },

  checkUpperBridgeCorrect(wantGo, isCorrect) {
    if (wantGo === PlayerInputConstants.UPPER_BRIDGE_STRING && isCorrect) {
      this.state[0].push(AnswerConstants.CORRECT_ANSWER);
      this.state[1].push(AnswerConstants.EMPTY_ANSWER);
    }
  },

  checkUpperBridgeWrong(wantGo, isCorrect) {
    if (wantGo === PlayerInputConstants.UPPER_BRIDGE_STRING && !isCorrect) {
      this.state[0].push(AnswerConstants.WRONG_ANSWER);
      this.state[1].push(AnswerConstants.EMPTY_ANSWER);
    }
  },

  checkLowerBridgeCorrect(wantGo, isCorrect) {
    if (wantGo === PlayerInputConstants.LOWER_BRIDGE_STRING && isCorrect) {
      this.state[0].push(AnswerConstants.EMPTY_ANSWER);
      this.state[1].push(AnswerConstants.CORRECT_ANSWER);
    }
  },

  checkLowerBridgeWrong(wantGo, isCorrect) {
    if (wantGo === PlayerInputConstants.LOWER_BRIDGE_STRING && !isCorrect) {
      this.state[0].push(AnswerConstants.EMPTY_ANSWER);
      this.state[1].push(AnswerConstants.WRONG_ANSWER);
    }
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
