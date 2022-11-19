const { Console } = require("@woowacourse/mission-utils");
const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const ValidateBridgeSize = require("./ValidateBridgeSize");
const ValidateMoving = require("./ValidateMoving");
const ValidateGameCommand = require("./ValidateGameCommand");
const BridgeGame = require("./BridgeGame");
const OutputView = require("./OutputView");
const GameInfo = require("./GameInfo");

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  validateMoving: null,

  validateGameCommand: null,

  messageOfInputSize: "\n다리의 길이를 입력해주세요.\n",

  messageOfInputMoving: "\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n",

  messageOfInputGameCommand: "\n게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n",
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    Console.readLine(this.messageOfInputSize, (bridgeSize) => {
      try {
        GameInfo.bridgeSize = new ValidateBridgeSize(bridgeSize).bridgeSize;
      } catch {
        OutputView.printError("[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.");
        return this.readBridgeSize();
      }
      GameInfo.bridge = BridgeMaker
        .makeBridge(GameInfo.bridgeSize, BridgeRandomNumberGenerator.generate);
      this.playGame();
    });
  },

  playGame() {
    BridgeGame.initializeGameInfo();
    this.readMoving();
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    Console.readLine(this.messageOfInputMoving, (moving) => {
      try {
        GameInfo.currentMove = new ValidateMoving(moving).moving;
      } catch {
        OutputView.printError("[ERROR] 이동할 칸은 'U' 혹은 'D'여야 합니다.");
        return this.readMoving();
      }
      this.moveBridge();
    });
  },

  moveBridge() {
    BridgeGame.move();
    OutputView.printMap();
    if (BridgeGame.isFailure()) return this.readGameCommand();

    return (BridgeGame.getPosition() !== GameInfo.bridgeSize - 1) ?
      this.readMoving() : OutputView.printSuccess();
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {
    Console.readLine(this.messageOfInputGameCommand, (gameCommand) => {
      try {
        GameInfo.gameCommand = new ValidateGameCommand(gameCommand).gameCommand;
      } catch {
        OutputView.printError("[ERROR] 재시작 혹은 종료는 'R' 혹은 'Q'여야 합니다.");
        return this.readGameCommand();
      }
      (BridgeGame.retry()) ? this.playGame() : OutputView.printResult()
    });
  },
};

module.exports = InputView;
