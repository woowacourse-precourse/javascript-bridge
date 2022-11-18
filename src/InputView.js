const MissionUtils = require('@woowacourse/mission-utils');
const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const BridgeGame = require('./BridgeGame');
const Check = require('./Check');
const INPUT_MESSAGES = require('./common/messages');
const InputView = {
  readBridgeSize() {
    MissionUtils.Console.readLine(`${INPUT_MESSAGES.INPUT_BRIDGESIZE}`, (size) => {
      const brige = BridgeMaker.makeBridge(size, BridgeRandomNumberGenerator.generate);
      const gamePlay = new BridgeGame(brige);
      this.readMoving(gamePlay);
    });
  },

  readMoving(gamePlay) {
    const playerInput = (input) => {
      Check.isVaildInput(input);
      const isGameOver = gamePlay.move(input);
      if (isGameOver) {
        this.readGameCommand(gamePlay);
      }
      return this.readMoving(gamePlay);
    };
    MissionUtils.Console.readLine(`${INPUT_MESSAGES.INPUT_MOVE}`, playerInput);
  },

  readGameCommand(gamePlay) {
    MissionUtils.Console.readLine(`${INPUT_MESSAGES.INPUT_RETRY}`, (answer) => {
      if (Check.CheckRestartGame(answer, gamePlay)) this.readMoving(gamePlay);
    });
  },
};

module.exports = InputView;
