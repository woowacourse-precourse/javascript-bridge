const MissionUtils = require("@woowacourse/mission-utils");
const BridgeGame = require("./BridgeGame");
const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const OutputView = require("./OutputView");
const Console = MissionUtils.Console;

const InputView = {
  readBridgeSize(tryCount) {
    Console.readLine("\n다리의 길이를 입력해주세요.\n", (inputBridgeSize) => {
      try {
        this.bridgeSizeException(inputBridgeSize);
      } catch (e) {
        Console.print(e);
        if (e) this.readBridgeSize();
      }
      bridge = BridgeMaker.makeBridge(inputBridgeSize, BridgeRandomNumberGenerator.generate);
      this.readMoving(bridge, 0, tryCount);
      return bridge;
    });
  },

  bridgeSizeException(inputBridgeSize) {
    if (isNaN(inputBridgeSize)) throw "[ERROR] 문자를 입력하실 수 없습니다.";
    if (inputBridgeSize < 3 || inputBridgeSize > 20) throw "[ERROR] 3이상 20이하의 수만 입력할 수 있습니다.";
  },

  readMoving(bridge, turnNumber, tryCount) {
    Console.readLine("\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n", (inputMoveUpDown) => {
      try {
        this.movingException(inputMoveUpDown);
      } catch (e) {
        Console.print(e);
        if (e) this.readMoving(bridge, turnNumber, tryCount);
      }
      const brgGame = new BridgeGame();
      let gameContinue = brgGame.move(turnNumber, bridge, inputMoveUpDown);
      if (gameContinue > 0) {
        OutputView.printMap(turnNumber, bridge, inputMoveUpDown, true);
        this.readMoving(bridge, turnNumber + 1, tryCount);
      }
      if (gameContinue < 0) {
        OutputView.printMap(turnNumber, bridge, inputMoveUpDown, false);
        this.readGameCommand(turnNumber, bridge, inputMoveUpDown, tryCount);
      }
      if (gameContinue == 0) {
        OutputView.printResult(turnNumber, bridge, inputMoveUpDown, true, tryCount);
        Console.close();
      }
    });
    return;
  },

  movingException(inputMoveUpDown) {
    if (inputMoveUpDown != "U" && inputMoveUpDown != "D") throw "[ERROR] U 혹은 D만 입력할 수 있습니다.";
  },

  readGameCommand(turnNumber, bridge, inputMoveUpDown, tryCount) {
    Console.readLine("\n게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n", (inputRetry) => {
      try {
        this.retryException(inputRetry);
      } catch (e) {
        Console.print(e);
        if (e) this.readGameCommand(turnNumber, bridge, inputMoveUpDown, tryCount);
      }
      const brgGame = new BridgeGame();
      let isRetry = brgGame.retry(inputRetry);
      if (isRetry == 1) this.readMoving(bridge, 0, tryCount + 1);
      if (isRetry == 0) {
        OutputView.printResult(turnNumber, bridge, inputMoveUpDown, false, tryCount);
        Console.close();
      }
    });
  },

  retryException(inputRetry) {
    if (inputRetry != "R" && inputRetry != "Q") throw "[ERROR] R 혹은 Q만 입력할 수 있습니다.";
  },
};

module.exports = InputView;
