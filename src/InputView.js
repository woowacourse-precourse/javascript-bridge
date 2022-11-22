const { Console } = require('@woowacourse/mission-utils');
const BridgeGame = require('./BridgeGame');
const OutputView = require('./OutputView');
const Validate = require('./Validate');
const { MESSAGE } = require('./constant');

const bridgeGame = new BridgeGame();
const InputView = {
  readBridgeSize() {
    Console.readLine(MESSAGE.BRIDGE_SIZE, (bridgeLength) => {
      try {
        this.makeBridge(bridgeLength);
      } catch (error) {
        Console.print(error);
        this.readBridgeSize();
      }
    });
  },
  makeBridge(bridgeLength) {
    Validate.bridgeValidate(bridgeLength);
    bridgeGame.setBridge(bridgeLength);
    this.readMoving();
  },
  readMoving() {
    Console.readLine(MESSAGE.MOVE_MESSAGE, (move) => {
      try {
        this.makeMove(move);
      } catch (error) {
        Console.print(error);
        this.readMoving();
      }
    });
  },
  makeMove(move) {
    Validate.movingValidate(move);
    const { input, output, status } = bridgeGame.move(move);
    if (output) OutputView[output](status);
    if (input) this[input]();
  },
  readGameCommand() {
    Console.readLine(MESSAGE.RESTART_MESSAGE,(restart)=>{
      try{
        Validate.restartValidate(restart);
      }
      catch(error){
        Console.print(error);
        this.readGameCommand()
      }
    });
  },
};

module.exports = InputView;
