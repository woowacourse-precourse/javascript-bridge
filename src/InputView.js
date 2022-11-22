const MissionUtils = require('@woowacourse/mission-utils');
const BridgeMaker = require('./BridgeMaker');
const BridgeGame = require('./BridgeGame');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const OutputView = require('./OutputView');
const Validate = require('./Validate');
const Constants = require('./Constants');
const catchError = require('./CatchError');

let game;

const InputView = {
  readBridgeSize() {
    MissionUtils.Console.readLine(Constants.Input.BRIDGE_SIZE, (size) => {
      catchError(this.getBridgeSize, size, InputView.readBridgeSize);
    });
  },
  getBridgeSize(size) {
    Validate.bridge(size);

    const bridge = BridgeMaker.makeBridge(size, BridgeRandomNumberGenerator.generate);
    game = new BridgeGame(bridge);
    InputView.readMoving();
  },

  readMoving() {
    MissionUtils.Console.readLine(Constants.Input.MOVE, (movement) => {
      catchError(InputView.getMoving, movement, InputView.readMoving);
    });
  },
  getMoving(movement) {
    Validate.upOrDown(movement);

    const moveResult = game.move(movement);
    const { map, tryNumber } = game.getResult();

    OutputView.printMap(map);
    InputView.switchMoveResult(moveResult, map, tryNumber);
  },
  switchMoveResult(moveResult, map, tryNumber) {
    switch (moveResult) {
      case Constants.Result.SUCCESS:
        return InputView.readMoving();
      case Constants.Result.FAIL:
        return InputView.readGameCommand();
      case Constants.Result.DONE:
        return OutputView.printResult(map, tryNumber, '성공');
    }
  },

  readGameCommand() {
    MissionUtils.Console.readLine(Constants.Input.GAME_COMMAND, (command) => {
      catchError(InputView.getCommand, command, InputView.readGameCommand);
    });
  },
  getCommand(command) {
    Validate.gameCommand(command);

    const { map, tryNumber } = game.getResult();
    InputView.switchCommand(command, map, tryNumber);
  },
  switchCommand(command, map, tryNumber) {
    switch (command) {
      case 'R':
        game.retry();
        return InputView.readMoving();
      case 'Q':
        return OutputView.printResult(map, tryNumber, '실패');
    }
  },
};

module.exports = InputView;
