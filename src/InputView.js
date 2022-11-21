const MissionUtils = require("@woowacourse/mission-utils");
const Console = MissionUtils.Console;
const {GAME_MESSAGE, COMMAND} =  require("./util/Constant");
const BridgeGame = require("./BridgeGame");
const { generate } = require("./BridgeRandomNumberGenerator");
const { makeBridge } = require("./BridgeMaker");
const { validateBridge, validateMove, validateCommand } = require("./util/Validation");
const OutputView = require("./OutputView");


const InputView = {

  readBridgeSize() {
    Console.readLine(GAME_MESSAGE.BRIDGE_SIZE, (inputString) => {
      const inputNum = parseInt(inputString);
      if (validateBridge(inputNum)) return this.readBridgeSize();
      const bridge = makeBridge(inputNum, generate);
      const bridgeGame = new BridgeGame(bridge);
      this.readMoving(bridgeGame);
    });
  },

  readMoving(bridgeGame) {
    Console.readLine(GAME_MESSAGE.MOVE, (inputMove) => {
      if (validateMove(inputMove)) return this.readMoving(bridgeGame);
      bridgeGame.move(inputMove);
      OutputView.pushResult(inputMove, bridgeGame.getSuccess());
      OutputView.printMap();
      this.next(bridgeGame);
    });
  },

  next(bridgeGame) {
    if (bridgeGame.gameNotFinished()) return this.readMoving(bridgeGame);
    else if (bridgeGame.gameSuccess()) return OutputView.printResult(bridgeGame.getCount(), bridgeGame.getSuccess());
    else return this.readGameCommand(bridgeGame);
  },

  readGameCommand(bridgeGame) {
    Console.readLine(GAME_MESSAGE.RESTART, (command) => {
      if (validateCommand(command)) return this.readGameCommand(bridgeGame);
      if (command === COMMAND.QUIT) OutputView.printResult(bridgeGame.getCount(), bridgeGame.getSuccess());
      if (command === COMMAND.RESTART) {
        this.initGame(bridgeGame);
        this.readMoving(bridgeGame);
      }
    });
  },

  initGame(bridgeGame) {
    bridgeGame.retry();
    OutputView.upper.length = 0;
    OutputView.downer.length = 0;
  }
};

module.exports = InputView;
