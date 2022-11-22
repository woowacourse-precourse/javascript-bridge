const MissionUtils = require('@woowacourse/mission-utils');
const {
  MESSAGE, ERROR, BRIDGE, BUTTON,
} = require('../Utils/constant');
const RandomNumber = require('../Utils/BridgeRandomNumberGenerator');
const BridgeMaker = require('../BridgeMaker');
const OutputView = require('./OutputView');
const BridgeGame = require('../BridgeGame');

const InputView = {
  isSucces: MESSAGE.SUCCESS,
  count: 1,
  size: 0,

  readBridgeSize() {
    MissionUtils.Console.readLine(MESSAGE.INPUT_BRIDGE_LENGTH, (length) => {
      this.size = +length;
      try {
        this.bridgeSizeValidate(length);
      } catch {
        MissionUtils.Console.print(ERROR.BRIDGE_LENGTH);
        this.readBridgeSize();
      }
      this.bridge = BridgeMaker.makeBridge(this.size, RandomNumber.generate);
      this.readMoving(this.bridge, this.size);
    });
  },

  bridgeSizeValidate(size) {
    if (+size < BRIDGE.MIN_LENGTH || BRIDGE.MAX_LENGTH < +size || Number.isNaN(+size)) {
      throw ERROR.BRIDGE_LENGTH;
    }
    return size;
  },

  readMoving(bridge, size) {
    MissionUtils.Console.readLine(MESSAGE.INPUT_MOVE, (move) => {
      try {
        this.moveValidate(move);
        this.makeMap(bridge, size, move);
      } catch {
        MissionUtils.Console.print(ERROR.MOVE);
        this.readMoving(bridge, size);
      }
    });
  },

  makeMap(bridge, size, move) {
    this.size = size;
    const bridgeGame = new BridgeGame(bridge, move);
    OutputView.printMap(bridgeGame);
    return this.checkBridge(bridgeGame);
  },

  moveValidate(move) {
    if (![BUTTON.UP, BUTTON.DOWN].includes(move)) {
      throw new Error(ERROR.MOVE);
    }
  },

  checkBridge(bridgeGame) {
    if (this.isFinish(bridgeGame)) {
      return OutputView.printResult(bridgeGame, this.isSucces, this.count);
    }
    this.printUpO(bridgeGame);
  },

  isFinish(bridgeGame) {
    if ((bridgeGame.realBridge[0].length === this.size
      && bridgeGame.realBridge[0][bridgeGame.realBridge[0].length - 1] === 'O')
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
      this.readGameCommand(bridgeGame);
    }
    this.printDownX(bridgeGame);
  },

  printDownX(bridgeGame) {
    if (bridgeGame.realBridge[1][bridgeGame.realBridge[1].length - 1] === 'X') {
      this.readGameCommand(bridgeGame);
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
      OutputView.printResult(bridgeGame, this.isSucces, this.count);
    }
    if (answer !== BUTTON.RETRY && answer !== BUTTON.QUIT) {
      throw new Error(ERROR.RETRY_OR_QUIT);
    }
  },

  movingValidate(move) {
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
      this.movingValidate(move);
      bridgeGame.moveIsWhat(move);
      bridgeGame.realBridge.map((x) => MissionUtils.Console.print(`[ ${x.join(' | ')} ]`));
      this.checkBridge(bridgeGame);
    });
  },

  printRetryBridge(bridgeGame) {
    this.count += 1;
    MissionUtils.Console.readLine(MESSAGE.INPUT_MOVE, (inputMove) => {
      const move = inputMove;
      this.movingValidate(move);
      bridgeGame.retry(move);
      bridgeGame.realBridge.map((x) => MissionUtils.Console.print(`[ ${x.join(' | ')} ]`));
      this.checkBridge(bridgeGame);
    });
  },

  readGameCommand(bridgeGame) {
    MissionUtils.Console.readLine(MESSAGE.INPUT_RETRY_OR_QUIT, (answer) => {
      this.isRetry(bridgeGame, answer);
    });
  },
};

module.exports = InputView;
