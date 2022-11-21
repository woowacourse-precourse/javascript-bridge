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
}

module.exports = GameController;
