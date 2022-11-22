const { Console } = require('@woowacourse/mission-utils');
const { MSG } = require('../utils/messages');
const { validator } = require('../utils/helper');
const OutputView = require('./OutputView');

const InputView = {
  game: null,

  setGame(game) {
    this.game = game;
    this.readBridgeSize();
  },

  setBridge(length) {
    this.game.bridge = length;
  },

  readBridgeSize() {
    Console.readLine(MSG.GAME.READ_BRIDGE, (length) => {
      try {
        validator.bridgeSize(length);
        this.setBridge(length);
        this.readMoving();
      } catch (error) {
        Console.print(error);
        this.readBridgeSize();
      }
    });
  },

  move(direction) {
    this.game.move(direction);
    OutputView.showMap(this.game);
    if (this.game.isEnd) OutputView.showResult(this.game);
    else if (this.game.isSuccess) this.readMoving();
    else this.readCommand();
  },

  readMoving() {
    Console.readLine(MSG.GAME.READ_DIRECTION, (direction) => {
      try {
        validator.direction(direction);
        this.move(direction);
      } catch (error) {
        Console.print(error);
        this.readMoving();
      }
    });
  },

  excuteCommand(command) {
    if (command === 'R') {
      this.game.retry();
      this.readMoving();
    } else {
      OutputView.showResult(this.game);
      Console.close();
    }
  },

  readCommand() {
    Console.readLine(MSG.GAME.READ_COMMAND, (command) => {
      try {
        validator.command(command);
        this.excuteCommand(command);
      } catch (error) {
        Console.print(error);
        this.readCommand();
      }
    });
  },
};

module.exports = InputView;
