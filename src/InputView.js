const MissionUtils = require("@woowacourse/mission-utils");
const BridgeGame = require("./BridgeGame");
const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const OutputView = require("./OutputView");
const Console = MissionUtils.Console;

const InputView = {
  gameContinue: 0,
  bridge: [],
  tryCount: 1,

  readBridgeSize() {
    Console.readLine("\n다리의 길이를 입력해주세요.\n", (inputBridgeSize) => {
      this.bridgeSizeExceptionCatch(inputBridgeSize);
      this.bridge = BridgeMaker.makeBridge(inputBridgeSize, BridgeRandomNumberGenerator.generate);
      this.readMoving(0);
      return;
    });
  },

  bridgeSizeExceptionCatch(inputBridgeSize) {
    try {
      this.bridgeSizeException(inputBridgeSize);
    } catch (e) {
      Console.print(e);
      this.readBridgeSize();
    }
  },

  bridgeSizeException(inputBridgeSize) {
    if (isNaN(inputBridgeSize)) throw "[ERROR] 문자를 입력하실 수 없습니다.";
    if (inputBridgeSize < 3 || inputBridgeSize > 20) throw "[ERROR] 3이상 20이하의 수만 입력할 수 있습니다.";
  },

  readMoving(turnNumber) {
    Console.readLine("\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n", (inputMoveUpDown) => {
      this.movingExceptionCatch(inputMoveUpDown, turnNumber);
      const brgGame = new BridgeGame();
      this.gameContinue = brgGame.move(turnNumber, this.bridge, inputMoveUpDown);
      this.isGameContinue(turnNumber, inputMoveUpDown);
    });
  },

  isGameContinue(turnNumber, inputMoveUpDown) {
    if (this.gameContinue > 0) this.successContinueGame(turnNumber, inputMoveUpDown);
    if (this.gameContinue < 0) this.inputWrongGame(turnNumber, inputMoveUpDown);
    if (this.gameContinue == 0) this.failGameOver(turnNumber, inputMoveUpDown);
  },

  successContinueGame(turnNumber, inputMoveUpDown) {
    let moveAndBool = inputMoveUpDown + "T";
    OutputView.makeBridgeMap(turnNumber, this.bridge, moveAndBool);
    this.readMoving(turnNumber + 1);
  },

  inputWrongGame(turnNumber, inputMoveUpDown) {
    let moveAndBool = inputMoveUpDown + "F";
    OutputView.makeBridgeMap(turnNumber, this.bridge, moveAndBool);
    this.readGameCommand(turnNumber, inputMoveUpDown);
  },

  failGameOver(turnNumber, inputMoveUpDown) {
    let moveAndBool = inputMoveUpDown + "T";
    OutputView.printResult(turnNumber, moveAndBool, this.tryCount);
    Console.close();
  },

  movingExceptionCatch(inputMoveUpDown, turnNumber) {
    try {
      this.movingException(inputMoveUpDown);
    } catch (e) {
      Console.print(e);
      this.readMoving(turnNumber);
    }
  },

  movingException(inputMoveUpDown) {
    if (inputMoveUpDown != "U" && inputMoveUpDown != "D") throw "[ERROR] U 혹은 D만 입력할 수 있습니다.";
  },

  readGameCommand(turnNumber, inputMoveUpDown) {
    Console.readLine("\n게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n", (inputRetry) => {
      this.retryExceptionCatch(inputRetry, turnNumber, inputMoveUpDown);
      const brgGame = new BridgeGame();
      let isRetry = brgGame.retry(inputRetry);
      this.isRetryGame(isRetry, turnNumber, inputMoveUpDown);
      if (isRetry == 0) Console.close();
    });
  },

  isRetryGame(isRetry, turnNumber, inputMoveUpDown) {
    let moveAndBool = inputMoveUpDown + "F";
    if (isRetry == 1) {
      this.tryCount++;
      this.readMoving(0);
    }
    if (isRetry == 0) OutputView.printResult(turnNumber, moveAndBool, this.tryCount);
  },

  retryExceptionCatch(inputRetry, turnNumber, inputMoveUpDown) {
    try {
      this.retryException(inputRetry);
    } catch (e) {
      Console.print(e);
      if (e) this.readGameCommand(turnNumber, inputMoveUpDown);
    }
  },

  retryException(inputRetry) {
    if (inputRetry != "R" && inputRetry != "Q") throw "[ERROR] R 혹은 Q만 입력할 수 있습니다.";
  },
};

module.exports = InputView;
