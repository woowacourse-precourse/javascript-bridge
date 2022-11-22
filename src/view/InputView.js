const MissionUtils = require("@woowacourse/mission-utils");
const Console = MissionUtils.Console;
const { GAME_MESSAGE, COMMAND } = require("../util/Constant");
const { validateBridge, validateMove, validateCommand } = require("../util/Validation");
const OutputView = require("./OutputView");
const BridgeController = require("../controller/BridgeController");


const InputView = {

  readBridgeSize() {
    Console.readLine(GAME_MESSAGE.BRIDGE_SIZE, (inputString) => {
      const inputNum = parseInt(inputString);
      if (validateBridge(inputNum)) return this.readBridgeSize();
      const bridgeGame = BridgeController.gameStart(inputNum);
      this.readMoving(bridgeGame);
    });
  },

  readMoving(bridgeGame) {
    Console.readLine(GAME_MESSAGE.MOVE, (inputMove) => {
      if (validateMove(inputMove)) return this.readMoving(bridgeGame);
      BridgeController.handleMove(bridgeGame, inputMove);
      this.resolveNext(bridgeGame);
    });
  },

  resolveNext(bridgeGame) {
    if (bridgeGame.gameNotFinished()) return this.readMoving(bridgeGame);
    else if (bridgeGame.gameSuccess()) return OutputView.printResult(bridgeGame.getCount(), bridgeGame.getSuccess(), bridgeGame);
    else return this.readGameCommand(bridgeGame);
  },

  readGameCommand(bridgeGame) {
    Console.readLine(GAME_MESSAGE.RESTART, (command) => {
      if (validateCommand(command)) return this.readGameCommand(bridgeGame);
      this.handleCommand(command, bridgeGame);
    });
  },

  handleCommand(command, bridgeGame) {
    if (command === COMMAND.QUIT) OutputView.printResult(bridgeGame.getCount(), bridgeGame.getSuccess(), bridgeGame);
    if (command === COMMAND.RESTART) {
      bridgeGame.retry();
      return this.readMoving(bridgeGame);
    }
  }
};

module.exports = InputView;
