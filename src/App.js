const InputView = require("./View/InputView");
const { Console } = require("@woowacourse/mission-utils");
const GameController = require("./Controller/GameController");
const { ERROR_MSG } = require("./Messages/constants");
const {
  ValidCmd,
  ValidMove,
  ValidSize,
} = require("./Validation/CheckValidation");

class App {
  play() {
    this.inputSize();
  }

  inputSize() {
    InputView.readBridgeSize((size) => {
      this.inputSizeForm(size);
    });
  }

  inputSizeForm(size) {
    try {
      ValidSize(size);
      this.startBridgeGame(size);
    } catch (error) {
      this.printMsgAndReadSizeAgain();
    }
  }

  printMsgAndReadSizeAgain() {
    Console.print(ERROR_MSG.INPUT_SIZE_ERROR);
    this.inputSize();
  }

  startBridgeGame(size) {
    GameController.startGame(size);
    this.inputMoving();
  }

  inputMoving() {
    InputView.readMoving((move) => {
      this.inputMovingForm(move);
    });
  }

  inputMovingForm(move) {
    try {
      ValidMove(move);
      this.checkBridge(move);
    } catch (error) {
      this.printMsgAndReadMovingAgain();
    }
  }

  printMsgAndReadMovingAgain() {
    Console.print(ERROR_MSG.INPUT_MOVING_ERROR);
    this.inputMoving();
  }

  checkCrossTheBridgeCompletely(move) {
    GameController.crossBridgeCompletely(move)
      ? GameController.exitGame(true)
      : this.inputMoving();
  }

  checkBridge(move) {
    GameController.checkInputCorrect(move)
      ? this.checkCrossTheBridgeCompletely(move)
      : this.showGameCommand(move);
  }

  showGameCommand(move) {
    if (move) GameController.makeMap(move);
    this.inputGameCmd();
  }

  inputGameCmd() {
    InputView.readGameCommand((cmd) => {
      this.inputGameCmdForm(cmd);
    });
  }

  inputGameCmdForm(cmd) {
    try {
      ValidCmd(cmd);
      this.selectRestartOrQuit(cmd);
    } catch (error) {
      this.printMsgAndInputCmdAgain();
    }
  }

  printMsgAndInputCmdAgain() {
    Console.print(ERROR_MSG.INPUT_CMD_ERROR);
    this.showGameCommand(null);
  }

  selectRestartOrQuit(cmd) {
    GameController.selectGame(cmd)
      ? this.restartGame()
      : GameController.exitGame(false);
  }

  restartGame() {
    GameController.clearMap();
    this.inputMoving();
  }
}

const app = new App();
app.play();

module.exports = App;
