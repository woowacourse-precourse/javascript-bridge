const { Console } = require('@woowacourse/mission-utils');
const { INPUT_MESSAGE, ERROR_MESSAGE } = require('./Constant');
const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const BridgeGame = require('./BridgeGame');
const OutputView = require('./OutputView');

let GAME;
const InputView = {
  readBridgeSize() {
    Console.readLine(INPUT_MESSAGE.BRIDGE_SIZE, (size) => {
      const VALIDATION = this.validateBridgeSize(size);
      if (VALIDATION) {
        GAME = this.startBridgeGame(Number(size));
        this.repeatMoving(-1);
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
    return false;
  },

  startBridgeGame(size) {
    const generateRandomNumber = BridgeRandomNumberGenerator.generate;
    const ANSWER = BridgeMaker.makeBridge(size, generateRandomNumber);
    GAME = new BridgeGame(ANSWER, size);
    return GAME;
  },

  repeatMoving(cnt) {
    const RESULT = GAME.getResult();
    const SIZE = GAME.getSize();
    if (cnt === SIZE - 1) {
      OutputView.printResult(RESULT, GAME.getCnt());
      Console.close();
    } else {
      this.readMoving(cnt + 1);
    }
  },

  readMoving(cnt) {
    Console.readLine(INPUT_MESSAGE.READ_MOVE, (move) => {
      const VALIDATION = this.validateMoving(move, cnt);
      if (VALIDATION) {
        const RESULT = GAME.move(cnt, move);
        OutputView.printMap(RESULT);
        this.check_X(RESULT, cnt);
      }
    });
  },

  validateMoving(move, cnt) {
    if (move === 'U' || move === 'D') return true;
    try {
      throw new Error(ERROR_MESSAGE.MOVE_ERROR);
    } catch (e) {
      Console.print(e);
      this.readMoving(cnt);
    }
    return false;
  },

  check_X(RESULT, cnt) {
    if (RESULT[cnt][1] === 'X') this.readGameCommand();
    else this.repeatMoving(cnt);
  },

  readGameCommand() {
    Console.readLine(INPUT_MESSAGE.READ_GAME_COMMAND, (restart) => {
      const VALIDATION = this.vadlidateGameCommand(restart);
      if (VALIDATION) this.continueGame(restart);
    });
  },

  continueGame(restart) {
    const [RESULT, CNT] = [GAME.getResult(), GAME.getCnt()];
    if (restart === 'R') {
      GAME.retry();
      this.repeatMoving(-1);
    } else {
      OutputView.printResult(RESULT, CNT);
      Console.close();
    }
  },

  vadlidateGameCommand(restart) {
    if (restart === 'R' || restart === 'Q') return true;
    try {
      throw new Error(ERROR_MESSAGE.RESTART_ERROR);
    } catch (e) {
      Console.print(e);
      this.readGameCommand();
    }
    return false;
  },
};

module.exports = InputView;
