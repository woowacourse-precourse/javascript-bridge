const MissionUtils = require("@woowacourse/mission-utils");
const Console = MissionUtils.Console;

const GameController = require("../controller/GameController");
const InputMessage = require("../static/InputMessage");

const InputView = {
  readBridgeSize() {
    Console.readLine(`${InputMessage.size}\n`, (size) => {
      if(!GameController.exceptionHandling(size, 'size')) {
        this.readBridgeSize();
        return;
      }
      this.readMoving();
    })
  },

  readMoving() {
    Console.readLine(`\n${InputMessage.moving}\n`, (moving) => {
      const moveResult = GameController.exceptionHandling(moving, 'moving')
      if(!moveResult) {
        this.readMoving();
        return;
      }
      this.determineNext(moveResult);
    })
  },

  determineNext(moveResult) {
    const next = GameController.determineNext(moveResult);
    if(next === 'readMoving') this.readMoving();
    if(next === 'readGameCommand') this.readGameCommand();
  },

  readGameCommand() {
    Console.readLine(`\n${InputMessage.retry}\n`, (retry) => {
      const retryResult = GameController.exceptionHandling(retry, 'retry')
      if(!retryResult) this.readGameCommand();
      else if(GameController.determineRetry(retryResult)) this.readMoving();
    })
  },
};

module.exports = InputView;
