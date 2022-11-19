const { ANSWER, COMMAND, PLAYER } = require("./constant/Constants");

const Player = {
  size: null,
  movingArr: [],
  state: [[], []],
  playerAns: [],
  tryingCount: PLAYER.INITIAL_TRY_NUMBER,
  gameSuccess: PLAYER.GMAE_FAIL,

  updateMovingArr(wantGo) {
    this.movingArr.push(wantGo);
  },

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
    if (wantGo === COMMAND.UPPER_BRIDGE_STRING && isCorrect) {
      this.state[0].push(ANSWER.CORRECT_ANSWER);
      this.state[1].push(ANSWER.EMPTY_ANSWER);
    }
  },

  checkUpperBridgeWrong(wantGo, isCorrect) {
    if (wantGo === COMMAND.UPPER_BRIDGE_STRING && !isCorrect) {
      this.state[0].push(ANSWER.WRONG_ANSWER);
      this.state[1].push(ANSWER.EMPTY_ANSWER);
    }
  },

  checkLowerBridgeCorrect(wantGo, isCorrect) {
    if (wantGo === COMMAND.LOWER_BRIDGE_STRING && isCorrect) {
      this.state[0].push(ANSWER.EMPTY_ANSWER);
      this.state[1].push(ANSWER.CORRECT_ANSWER);
    }
  },

  checkLowerBridgeWrong(wantGo, isCorrect) {
    if (wantGo === COMMAND.LOWER_BRIDGE_STRING && !isCorrect) {
      this.state[0].push(ANSWER.EMPTY_ANSWER);
      this.state[1].push(ANSWER.WRONG_ANSWER);
    }
  },

  getSize(size) {
    this.size = size;
  },

  checkGameSuccess() {
    if (
      this.playerAns.length === this.size &&
      !this.playerAns.includes(false)
    ) {
      this.gameSuccess = PLAYER.GAME_SUCCESS;
    }
  },

  reset() {
    this.state = [[], []];
    this.movingArr = [];
    this.playerAns = [];
    this.tryingCount += PLAYER.INCREASE_TRY_NUMBER;
  },
};

module.exports = Player;
