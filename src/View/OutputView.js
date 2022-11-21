const MissionUtils = require('@woowacourse/mission-utils');
const { MESSAGE, ERROR, BUTTON } = require('../Utils/constant');
const BridgeGame = require('../BridgeGame');

const OutputView = {
  isSucces: MESSAGE.SUCCESS,
  count: 1,
  size: 0,

  printStart() {
    MissionUtils.Console.print(MESSAGE.GAME_START);
  },

  printMap(bridge, size, move) {
    this.size = size;
    const bridgeGame = new BridgeGame(bridge, move);
    bridgeGame.realBridge.map((x) => MissionUtils.Console.print(`[ ${x.join('\n')} ]`));
    return this.checkBridge(bridgeGame);
  },

  checkBridge(bridgeGame) {
    if (this.isFinish(bridgeGame)) {
      return this.printResult(bridgeGame);
    }
    this.printUpO(bridgeGame);
  },

  isFinish(bridgeGame) {
    if ((bridgeGame.realBridge[0].length === this.size
      && bridgeGame.realBridge[0][bridgeGame.realBridge[0].length - 1]
        === 'O')
    || (bridgeGame.realBridge[0].length === this.size
      && bridgeGame.realBridge[1][bridgeGame.realBridge[1].length - 1] === 'O')
    ) {
      return true;
    }
    return false;
  },

  printUpO(bridgeGame) {
    if (bridgeGame.realBridge[0][bridgeGame.realBridge[0].length - 1] === 'O') {
      this.printBridge(bridgeGame);
    }
    this.printDownO(bridgeGame);
  },

  printDownO(bridgeGame) {
    if (bridgeGame.realBridge[1][bridgeGame.realBridge[1].length - 1] === 'O') {
      this.printBridge(bridgeGame);
    }
    this.printUpX(bridgeGame);
  },

  printUpX(bridgeGame) {
    if (bridgeGame.realBridge[0][bridgeGame.realBridge[0].length - 1] === 'X') {
      MissionUtils.Console.readLine(MESSAGE.INPUT_RETRY_OR_QUIT, (answer) => {
        this.isRetry(bridgeGame, answer);
      });
    }
    this.printDownX(bridgeGame);
  },

  printDownX(bridgeGame) {
    if (bridgeGame.realBridge[1][bridgeGame.realBridge[1].length - 1] === 'X') {
      MissionUtils.Console.readLine(MESSAGE.INPUT_RETRY_OR_QUIT, (answer) => {
        this.isRetry(bridgeGame, answer);
      });
    }
  },

  isRetry(bridgeGame, answer) {
    try {
      this.retryOrQuitValidate(bridgeGame, answer);
    } catch {
      MissionUtils.Console.print(ERROR.RETRY_OR_QUIT);
      this.printUpO(bridgeGame);
    }
    if (answer === 'R') {
      this.printRetryBridge(bridgeGame);
    }
  },

  retryOrQuitValidate(bridgeGame, answer) {
    if (answer === BUTTON.QUIT) {
      this.isSucces = MESSAGE.FAIL;
      this.printResult(bridgeGame);
    }
    if (answer !== BUTTON.RETRY && answer !== BUTTON.QUIT) {
      throw new Error(ERROR.RETRY_OR_QUIT);
    }
  },

  moveValidate(move) {
    try {
      if (![BUTTON.UP, BUTTON.DOWN].includes(move)) {
        throw new Error(ERROR.MOVE);
      }
    } catch {
      MissionUtils.Console.print(ERROR.MOVE);
    }
  },

  printBridge(bridgeGame) {
    MissionUtils.Console.readLine(MESSAGE.INPUT_MOVE, (answer) => {
      const move = answer;
      this.moveValidate(move);
      bridgeGame.moveIsWhat(move);
      bridgeGame.realBridge.map((x) => MissionUtils.Console.print(`[ ${x.join(' | ')} ]`));
      this.checkBridge(bridgeGame);
    });
  },

  printRetryBridge(bridgeGame) {
    this.count += 1;
    MissionUtils.Console.readLine(MESSAGE.INPUT_MOVE, (inputMove) => {
      const move = inputMove;
      this.moveValidate(move);
      bridgeGame.retry(move);
      bridgeGame.realBridge.map((x) => MissionUtils.Console.print(`[ ${x.join(' | ')} ]`));
      this.checkBridge(bridgeGame);
    });
  },

  printResult(bridgeGame) {
    MissionUtils.Console.print(MESSAGE.RESULT);
    bridgeGame.realBridge.map((x) => MissionUtils.Console.print(`[ ${x.join(' | ')} ]`));
    MissionUtils.Console.print(MESSAGE.isSucces(this.isSucces));
    MissionUtils.Console.print(MESSAGE.printCount(this.count));
    MissionUtils.Console.close();
  },
};

module.exports = OutputView;
