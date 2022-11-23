const MissionUtils = require("@woowacourse/mission-utils");
const BridgeMaker = require('./BridgeMaker');
const BridgeGame = require('./BridgeGame');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const Validation = require('./Validation');
const OutputView = require('./OutputView');
const Constant = require('./Constant');

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    MissionUtils.Console.readLine(Constant.USER_INPUT_MESSAGE.BRIDGE_SIZE, (bridgeLength) => {
      console.log(`${Constant.USER_INPUT_MESSAGE.BRIDGE_SIZE}${bridgeLength}`);
      const ckeckNum = new Validation();
      try {
        ckeckNum.checkNum(bridgeLength);
      } catch(err) {
        MissionUtils.Console.print(Constant.ERROR_MESSAGE.CHECK_NUM_ERROR);
        return this.readBridgeSize()
      }
      const bridge = BridgeMaker.makeBridge(bridgeLength, BridgeRandomNumberGenerator.generate);
      this.readMoving(bridge, [], 1);
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(bridge, arr, count) {
    let moves = arr;
    MissionUtils.Console.readLine(Constant.USER_INPUT_MESSAGE.BRIDGE_MOVE, (moveInputValue) => {
      console.log(`${Constant.USER_INPUT_MESSAGE.BRIDGE_MOVE}${moveInputValue}`);
      const ckeckMove = new Validation();
      try {
        ckeckMove.checkMove(moveInputValue);
      } catch(err) {
        MissionUtils.Console.print(Constant.ERROR_MESSAGE.CHECK_MOVE_ERROR);
        return this.readMoving(bridge, arr, count)
      }
      moves += moveInputValue;
      this.moveBridgeGame(bridge, moves, count)
    });
  },

  /**
   * 사용자의 입력된 값에 따른 BridgeGame.move
   */
  moveBridgeGame(bridge, moves, count) {
    const bridgeGame = new BridgeGame();
    if(bridgeGame.move(bridge, moves)) {
      OutputView.printMap(bridge, moves);
      if(bridge.length !== moves.length) {
        this.readMoving(bridge, moves, count);
      } else {
        MissionUtils.Console.print(Constant.END_MESSAGE.RESULT);
        OutputView.printMap(bridge, moves);
        OutputView.printResult(true, count);
        MissionUtils.Console.close();
      }
    } else {
      OutputView.printMap(bridge, moves);
      this.readGameCommand(count);
    }
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(count) {
    MissionUtils.Console.readLine(Constant.USER_INPUT_MESSAGE.BRIDGE_GAME_RETRY, (gameRetry) => {
      console.log(`${Constant.USER_INPUT_MESSAGE.BRIDGE_GAME_RETRY}${gameRetry}`);
      const checkRetry = new Validation();
      try {
        checkRetry.checkRetry(gameRetry);
      } catch(err) {
        MissionUtils.Console.print(Constant.ERROR_MESSAGE.CHECK_RERTY_ERROR);
        return this.readGameCommand(count)
      }
      this.readGameCommand(gameRetry, count)
    });
  },

  /**
   * 사용자의 입력된 값에 따른 BridgeGame.retry
   */
  regameBridgeGame(gameRetry, count) {
    const bridgeGame = new BridgeGame();
    bridgeGame.retry(gameRetry, count)
  },
}

module.exports = InputView;
