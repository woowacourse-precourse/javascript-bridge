const InputView = require("../View/InputView");
const OutputView = require("../View/OutputView");
const { Console } = require("@woowacourse/mission-utils");
const BridgeGame = require("../Model/BridgeGame");
const BridgeMaker = require("../BridgeMaker");
const {
  Check,
  checkBridgeLength,
  checkMoveFormat,
  checkCommandFormat,
} = require("../Utils/Check");
const BridgeRandomNumberGenerator = require("../Utils/BridgeRandomNumberGenerator");
const { KEY } = require("../Constants/Token");
const { SAYS } = require("../Constants/Message");

class GameController {
  constructor() {
    this.model = new BridgeGame();
    this.view = {
      input: InputView,
      output: OutputView,
    };
  }

  startGame() {
    this.view.output.printMessage(SAYS.START);
    this.createBridge();
  }

  createBridge() {
    this.view.input.readBridgeSize((sizeInput) => {
      Check(sizeInput, checkBridgeLength, this.createBridge.bind(this));

      const bridge = BridgeMaker.makeBridge(
        sizeInput,
        BridgeRandomNumberGenerator.generate
      );

      this.model.setState({ bridge });
      this.playRound();
    });
  }

  playRound() {
    this.view.input.readMoving((moveInput) => {
      const step = Check(moveInput, checkMoveFormat, this.playRound.bind(this));

      if (step === undefined) {
        return;
      }

      this.model.move(step);

      const { isAlive, currentIndex, bridge, currentMap } = this.model.state;

      const isEnd = currentIndex === bridge.length;

      this.view.output.printMap(currentMap);
      this.proceedNextStep(isAlive, isEnd);
    });
  }

  proceedNextStep(isAlive, isEnd) {
    if (!isAlive) {
      this.retryOrFinish();
    } else if (isEnd) {
      this.finishGame();
    } else {
      this.playRound();
    }
  }

  retryOrFinish() {
    this.view.input.readGameCommand((commandInput) => {
      const command = Check(
        commandInput,
        checkCommandFormat,
        this.retryOrFinish.bind(this)
      );

      if (command === KEY.COMMAND_RESTART) {
        this.model.retry();
        this.playRound();
      } else if (command === KEY.COMMAND_QUIT) {
        this.finishGame();
      }
    });
  }

  finishGame() {
    this.view.output.printResult(this.model.state);
    Console.close();
  }
}

module.exports = GameController;
