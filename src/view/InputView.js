const { Console } = require("@woowacourse/mission-utils");
const {
  BridgeSizeValidation,
  MoveInputValidation,
  CommandInputValidation,
} = require("../Validation");
const generator = require("../BridgeRandomNumberGenerator").generate;
const BridgeMaker = require("../BridgeMaker");
const BridgeGame = require("../BridgeGame");
const OutputView = require("./OutputView");
const Player = require("../Player");
const { MESSAGE } = require("../constant/Constants");

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    Console.readLine(MESSAGE.ASK_BRIDGE_LENGTH, (sizeInput) => {
      try {
        Console.print("");
        this.createRandomBridge(sizeInput);
      } catch (err) {
        Console.print(err);
        this.readBridgeSize();
      }
    });
  },

  createRandomBridge(sizeInput) {
    const bridgeSizeValidation = new BridgeSizeValidation(sizeInput);
    const size = bridgeSizeValidation.makeStringToNumber();
    Player.updateSize(size);

    this.canWalkBridge = BridgeMaker.makeBridge(size, generator);

    this.readMoving();
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    Console.readLine(MESSAGE.ASK_WHERE_WANT_TO_GO, (wantGo) => {
      try {
        this.calculatePlayerMove(wantGo);
      } catch (err) {
        Console.print(err);
        this.readMoving();
      }
    });
  },

  calculatePlayerMove(wantGo) {
    new MoveInputValidation(wantGo);

    const isCorrect = new BridgeGame().move(this.canWalkBridge, wantGo);
    Player.updateState(wantGo, isCorrect);

    OutputView.printMap();
    if (Player.gameSuccess) OutputView.printResult();
    else isCorrect ? this.readMoving() : this.readGameCommand();
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {
    Console.readLine(MESSAGE.ASK_RETRY_OR_QUIT, (command) => {
      try {
        this.decideRetryOrQuit(command);
      } catch (err) {
        Console.print(err);
        this.readGameCommand();
      }
    });
  },

  decideRetryOrQuit(command) {
    new CommandInputValidation(command);

    new BridgeGame().retry(command)
      ? (Player.reset(), this.readMoving())
      : OutputView.printResult();
  },
};

module.exports = InputView;
