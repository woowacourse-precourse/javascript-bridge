const { Console } = require('@woowacourse/mission-utils');
const { INPUT_MESSAGE, ERROR_MESSAGE } = require('./Constant');
const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const BridgeGame = require('./BridgeGame');
const InputView = {
  readBridgeSize() {
    Console.readLine(INPUT_MESSAGE.BRIDGE_SIZE, size => {
      const VALIDATION = this.validateBridgeSize(size);
      if (VALIDATION) {
        size = parseInt(size);
        const GAME = this.startBridgeGame(size);
      }
    });
  },

  validateBridgeSize(size) {
    if (size >= 3 && size <= 20) return true;
    try {
      throw new Error(ERROR_MESSAGE.SIZE_ERROR);
    } catch (e) {
      Console.print(e);
      this.readBridgeSize();
    }
  },

  startBridgeGame(size) {
    const generateRandomNumber = BridgeRandomNumberGenerator.generate;
    const ANSWER = BridgeMaker.makeBridge(size, generateRandomNumber);
    // console.log(ANSWER);
    const GAME = new BridgeGame(ANSWER, size);
    return GAME;
  },

  validateMoving(move) {
    if (move === 'U' || move === 'D') return move;
    throw new Error(ERROR_MESSAGE.MOVE_ERROR);
  },

  readGameCommand() {
    return new Promise(resolve => {
      Console.readLine(INPUT_MESSAGE.READ_GAME_COMMAND, restart => {
        const VALIDATION = this.vadlidateGameCommand(restart);
        resolve(VALIDATION);
      });
    });
  },

  vadlidateGameCommand(restart) {
    if (restart === 'R' || restart === 'Q') return restart;
    throw new Error(ERROR_MESSAGE.RESTART_ERROR);
  },
};

module.exports = InputView;
