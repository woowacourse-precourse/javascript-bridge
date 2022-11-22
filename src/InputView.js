const MissionUtils = require('@woowacourse/mission-utils');
const BridgeMaker = require('./BridgeMaker');
const BridgeGame = require('./BridgeGame');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const OutputView = require('./OutputView');
const Validate = require('./Validate');
const Constants = require('./Constants');
const catchError = require('./CatchError');

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 * - 제공된 `InputView` 객체를 활용해 구현해야 한다.
- `InputView`의 파일 경로는 변경할 수 있다.
- `InputView`의 메서드의 인자는 변경할 수 있다.
- 사용자 값 입력을 위해 필요한 메서드를 추가할 수 있다.
 */
let game;

const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    MissionUtils.Console.readLine(Constants.Input.BRIDGE_SIZE, (size) => {
      catchError(Validate.bridge, size);

      const bridge = BridgeMaker.makeBridge(size, BridgeRandomNumberGenerator.generate);
      game = new BridgeGame(bridge);
      InputView.readMoving();
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    MissionUtils.Console.readLine(Constants.Input.MOVE, (movement) => {
      catchError(Validate.upOrDown, movement);

      const moveResult = game.move(movement);
      const { map } = game.getResult();
      OutputView.printMap(map);
      InputView.readMoveResult(moveResult);
    });
  },
  /**
   * 사용자가 이동한 결과 값을 받는다.
   */
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

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {
    MissionUtils.Console.readLine(Constants.Input.GAME_COMMAND, (command) => {
      try {
        Validate.gameCommand(command);
      } catch (error) {
        MissionUtils.Console.print(error);
      }
      readCommand(command);
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
