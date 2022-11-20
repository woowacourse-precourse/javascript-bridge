const { ANSWER, COMMAND, PLAYER } = require("./constant/Constants");

const Player = {
  size: null,
  movingArr: [],
  state: [[], []],
  playerAns: [],
  tryingCount: PLAYER.INITIAL_TRY_NUMBER,
  gameSuccess: PLAYER.GMAE_FAIL,

  updateMovingArr(moving) {
    this.movingArr.push(moving);
  },

  updateState(moving, isCorrect) {
    this.calculateBridgeState(moving, isCorrect);
    this.playerAns.push(isCorrect);

    this.checkGameSuccess();
  },

  calculateBridgeState(moving, isCorrect) {
    this.checkUpperBridgeCorrect(moving, isCorrect);

    this.checkUpperBridgeWrong(moving, isCorrect);

    this.checkLowerBridgeCorrect(moving, isCorrect);

    this.checkLowerBridgeWrong(moving, isCorrect);
  },

  checkUpperBridgeCorrect(moving, isCorrect) {
    if (moving === COMMAND.UPPER_BRIDGE_STRING && isCorrect) {
      this.state[0].push(ANSWER.CORRECT_ANSWER);
      this.state[1].push(ANSWER.EMPTY_ANSWER);
    }
  },

  checkUpperBridgeWrong(moving, isCorrect) {
    if (moving === COMMAND.UPPER_BRIDGE_STRING && !isCorrect) {
      this.state[0].push(ANSWER.WRONG_ANSWER);
      this.state[1].push(ANSWER.EMPTY_ANSWER);
    }
  },

  checkLowerBridgeCorrect(moving, isCorrect) {
    if (moving === COMMAND.LOWER_BRIDGE_STRING && isCorrect) {
      this.state[0].push(ANSWER.EMPTY_ANSWER);
      this.state[1].push(ANSWER.CORRECT_ANSWER);
    }
  },

  checkLowerBridgeWrong(moving, isCorrect) {
    if (moving === COMMAND.LOWER_BRIDGE_STRING && !isCorrect) {
      this.state[0].push(ANSWER.EMPTY_ANSWER);
      this.state[1].push(ANSWER.WRONG_ANSWER);
    }
  },

  setSize(size) {
    this.size = size;
  },

  getGameSuccess() {
    return this.gameSuccess;
  },

  getMovingArr() {
    return this.movingArr;
  },

  getState() {
    return this.state;
  },

  getTryingCount() {
    return this.tryingCount;
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
