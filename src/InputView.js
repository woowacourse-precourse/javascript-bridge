const MissionUtils = require("@woowacourse/mission-utils");
const { BRIDGE_LENGTH, MOVE_SPACE, RE_OR_END } = require('./constant/inputMessage');
const inputLengthCheck = require('./error/lengthInputError');
const moveInputCheck = require('./error/moveInputCheck');
const reOrEndCheck = require('./error/reOrEndCheck');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const BridgeMaker = require('./BridgeMaker');
const BridgeGame = require("./BridgeGame");
const OutputView = require("./OutputView");
const { SUCCESS_MESSAGE, FAIL_MESSAGE } = require("./constant/outputMessage");

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    MissionUtils.Console.readLine(BRIDGE_LENGTH, (length) => {
      if (!inputLengthCheck(length)) return this.readBridgeSize();
      const bridges = BridgeMaker.makeBridge(length, BridgeRandomNumberGenerator.generate());
      const bridgeArray = [[], []];
      const tryCount = 1;
      this.readMoving(bridges, tryCount, bridgeArray);
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(bridges, tryCount, bridgeArray) {
    MissionUtils.Console.readLine(MOVE_SPACE, (move) => {
      if (!moveInputCheck(move)) return this.readMoving(bridges, tryCount, bridgeArray);
      const bridgeGame = new BridgeGame();
      const checkBridgeArray = bridgeGame.move(move, bridges, bridgeArray);
      OutputView.printMap(checkBridgeArray);
      this.moveSetCheck(bridges, tryCount, checkBridgeArray)
    });
  },

  moveSetCheck(bridges, tryCount, bridgeArray) {
    if (bridgeArray[0].includes('X') || bridgeArray[1].includes('X')) {
      return this.readGameCommand(bridges, tryCount, bridgeArray);
    }
    if (bridges.length === bridgeArray[0].length) {
      return OutputView.printResult(SUCCESS_MESSAGE, tryCount, bridgeArray);
    }

    return this.readMoving(bridges, tryCount, bridgeArray);
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(bridges, tryCount, bridgeArray) {
    MissionUtils.Console.readLine(RE_OR_END, (decision) => {
      if (!reOrEndCheck(decision)) return this.readGameCommand(bridges, tryCount, bridgeArray);
      if (decision === 'R') {
        const bridgeGame = new BridgeGame();
        bridgeArray = bridgeGame.retry(bridgeArray);
        tryCount =+ 1;
        return this.readMoving(bridges, tryCount, bridgeArray);
      }
      if (decision === 'Q') {
        return OutputView.printResult(FAIL_MESSAGE, tryCount, bridgeArray);
      }
    });
  },
};

module.exports = InputView;
