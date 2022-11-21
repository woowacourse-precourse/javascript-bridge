const { Console } = require('@woowacourse/mission-utils');
const { INPUT_MESSAGE, ERROR_MESSAGE } = require('./Constant');
const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const BridgeGame = require('./BridgeGame');
const OutputView = require('./OutputView');

const InputView = {
  readBridgeSize() {
    Console.readLine(INPUT_MESSAGE.BRIDGE_SIZE, size => {
      const VALIDATION = this.validateBridgeSize(size);
      if (VALIDATION) {
        size = parseInt(size);
        const GAME = this.startBridgeGame(size);
        this.repeatMoving(GAME, -1);
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
    const GAME = new BridgeGame(ANSWER, size);
    return GAME;
  },

  repeatMoving(GAME, cnt) {
    const RESULT = GAME.getResult();
    const SIZE = GAME.getSize();
    if (cnt === SIZE - 1) {
      OutputView.printResult(RESULT, GAME.getCnt());
      Console.close();
    } else {
      this.readMoving(GAME, cnt + 1);
    }
  },

  readMoving(GAME, cnt) {
    Console.readLine(INPUT_MESSAGE.READ_MOVE, move => {
      const VALIDATION = this.validateMoving(move, GAME, cnt);
      if (VALIDATION) {
        RESULT = GAME.move(cnt, move);
        OutputView.printMap(RESULT);
        this.check_X(GAME, RESULT, cnt);
      }
    });
  },

  validateMoving(move, GAME, cnt) {
    if (move === 'U' || move === 'D') return true;
    try {
      throw new Error(ERROR_MESSAGE.MOVE_ERROR);
    } catch (e) {
      Console.print(e);
      this.readMoving(GAME, cnt);
    }
  },

  check_X(GAME, RESULT, cnt) {
    RESULT[cnt][1] === 'X'
      ? this.readGameCommand(GAME)
      : this.repeatMoving(GAME, cnt);
  },

  readGameCommand(GAME) {
    Console.readLine(INPUT_MESSAGE.READ_GAME_COMMAND, restart => {
      const VALIDATION = this.vadlidateGameCommand(restart, GAME);
      if (VALIDATION) this.continueGame(GAME, restart);
    });
  },

  continueGame(GAME, restart) {
    const [RESULT, CNT] = [GAME.getResult(), GAME.getCnt()];
    if (restart === 'R') {
      GAME.retry();
      this.repeatMoving(GAME, -1);
    } else {
      OutputView.printResult(RESULT, CNT);
      Console.close();
    }
  },

  vadlidateGameCommand(restart, GAME) {
    if (restart === 'R' || restart === 'Q') return true;
    try {
      throw new Error(ERROR_MESSAGE.RESTART_ERROR);
    } catch (e) {
      Console.print(e);
      this.readGameCommand(GAME);
    }
  },
};

module.exports = InputView;
