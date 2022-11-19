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
      this.setSize(sizeInput);
    });
  },

  setSize(sizeInput) {
    try {
      Console.print("");
      this.createRandomBridge(sizeInput);
    } catch (err) {
      Console.print(err);
      this.readBridgeSize();
    }
  },

  createRandomBridge(sizeInput) {
    new BridgeSizeValidation(sizeInput);

    const size = Number(sizeInput);
    Player.getSize(size);
    this.canWalkBridge = BridgeMaker.makeBridge(size, generator);

    this.readMoving();
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    Console.readLine(MESSAGE.ASK_WHERE_WANT_TO_GO, (wantGo) => {
      this.setMove(wantGo);
    });
  },

  setMove(wantGo) {
    try {
      this.calculatePlayerMove(wantGo);
    } catch (err) {
      Console.print(err);
      this.readMoving();
    }
  },

  calculatePlayerMove(wantGo) {
    new MoveInputValidation(wantGo);

    this.isCorrect = new BridgeGame().move(this.canWalkBridge, wantGo);
    Player.updateState(wantGo, this.isCorrect);

    OutputView.printMap();
    this.checkGameSuccess();
  },

  checkGameSuccess() {
    if (Player.gameSuccess) {
      return OutputView.printResult();
    }

    return this.checkCorrectAnswer();
  },

  checkCorrectAnswer() {
    if (this.isCorrect) {
      return this.readMoving();
    }

    return this.readGameCommand();
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {
    Console.readLine(MESSAGE.ASK_RETRY_OR_QUIT, (command) => {
      this.setCommand(command);
    });
  },

  setCommand(command) {
    try {
      this.decideRetryOrQuit(command);
    } catch (err) {
      Console.print(err);
      this.readGameCommand();
    }
  },

  decideRetryOrQuit(command) {
    new CommandInputValidation(command);

    this.checkCommand(command);
  },

  checkCommand(command) {
    if (new BridgeGame().retry(command)) {
      Player.reset();
      return this.readMoving();
    }

    return OutputView.printResult();
  },
};

module.exports = InputView;
