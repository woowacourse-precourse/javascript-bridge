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

  messageOfInputSize: "다리의 길이를 입력해주세요.\n",

  messageOfInputMoving: "\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n",

  messageOfInputGameCommand: "\n게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n",
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    Console.readLine(this.messageOfInputSize, (bridgeSize) => {
      GameInfo.bridgeSize = new ValidateBridgeSize(bridgeSize).bridgeSize;
      GameInfo.bridge = BridgeMaker
        .makeBridge(GameInfo.bridgeSize, BridgeRandomNumberGenerator);
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
      this.validateMoving = new ValidateMoving(moving);
      BridgeGame.move(this.validateMoving.moving);
      OutputView.moveBridge = BridgeGame.getMoveBridge();
      OutputView.printMap();
      const moveBridge = BridgeGame.getMoveBridge();
      if (moveBridge[0].concat(moveBridge[1]).includes("X")) return this.readGameCommand();
      if (BridgeGame.getPosition() !== GameInfo.bridgeSize - 1) {
        return this.readMoving();
      }
      GameInfo.gameResult = "성공";
      return OutputView.printResult();
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {
    Console.readLine(this.messageOfInputGameCommand, (gameCommand) => {
      GameInfo.gameCommand = new ValidateGameCommand(gameCommand).gameCommand;
      (BridgeGame.retry()) ? this.playGame() : OutputView.printResult()
    });
  },
};

module.exports = InputView;
