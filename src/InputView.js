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
      catchError(Validate.bridge, size, InputView.readBridgeSize);

      const bridge = BridgeMaker.makeBridge(size, BridgeRandomNumberGenerator.generate);
      game = new BridgeGame(bridge);
      InputView.readMoving();
    });
  },
  readMoving() {
    MissionUtils.Console.readLine(Constants.Input.MOVE, (movement) => {
      catchError(Validate.upOrDown, movement, InputView.readMoving);

      const moveResult = game.move(movement);
      const { map } = game.getResult();
      OutputView.printMap(map);
      InputView.readMoveResult(moveResult);
    });
  },
  readMoveResult(moveResult) {
    const { map, tryNumber } = game.getResult();
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
      catchError(Validate.gameCommand, command, InputView.readGameCommand);

      InputView.readCommand(command);
    });
  },
  readCommand(command) {
    const { map, tryNumber } = game.getResult();
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
