const BridgeRandomNumberGenerator = require("../BridgeRandomNumberGenerator");
const BridgeMaker = require("../BridgeMaker");
const InputView = require("../View/InputView");
const OutputView = require("../View/OutputView");
const ExceptionHandler = require("../utils/ExceptionHandler");
const BridgeGame = require("../Model/BridgeGame");
const Constant = require("../utils/Constant");
const Message = require("../utils/Message");

class GameController {
  #tries;

  constructor() {
    this.BridgeGame;
    this.#tries = 1;
  }

  /**
   * 게임을 시작하는 메소드이다.
   * InputView의 메소드를 호출하여 해당 메소드의 콜백으로 로직을 수행할 메소드를 전달한다.
   */
  startGame() {
    this.greeting();
    InputView.readBridgeSize(this.startGameCallback.bind(this));
  }

  /**
   * 사용자가 입력을 잘못했을 때 해당 부분부터 게임을 재개하는 메소드이다.
   * InputView의 메소드를 호출하여 해당 메소드의 콜백으로 로직을 수행할 메소드를 전달한다.
   */
  restartGame() {
    InputView.readBridgeSize(this.startGameCallback.bind(this));
  }

  startGameCallback(input) {
    this.constructBridgeGameAndSaveAnswerBridge(input);
  }

  greeting() {
    OutputView.printGreeting();
  }

  /**
   * try/catch 구문을 사용해 예외 처리를 한다.
   * 에러 문구를 출력하고 다시 실행하거나 게임을 그대로 진행한다.
   * 입력받은 다리의 길이를 BridgeGame의 생성자에 전달하면서 생성한다.
   * 그리고 다리의 길이를 BridgeMaker에 전달해 정답 다리를 생성하고 BridgeGame에 전달한다.
   * 위 로직을 다 수행한 후 다음 로직을 수행할 첫 메소드를 호출한다.
   * @param {string} size 사용자가 입력한 다리의 길이이다.
   */
  constructBridgeGameAndSaveAnswerBridge(size) {
    try {
      ExceptionHandler.isNotaNumber(size);
      ExceptionHandler.validateSizeInput(size);

      this.constructBridgeGame(size);
      this.createAndSaveAnswerBridge(size);
    } catch (err) {
      OutputView.printError(err);
      this.restartGame();
    }
  }

  constructBridgeGame(size) {
    this.BridgeGame = new BridgeGame(parseInt(size));
  }

  createAndSaveAnswerBridge(size) {
    this.BridgeGame.answerBridge = BridgeMaker.makeBridge(size, BridgeRandomNumberGenerator.generate);
    this.startMove();
  }
}

module.exports = GameController;
