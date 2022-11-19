const InputView = require('./InputView');
const BridgeMaker = require('./BridgeMaker');
const OutputView = require('./OutputView');
const Validator = require('./Validator');
const BridgeGame = require('./BridgeGame');
const BridgeMap = require('./BridgeMap');
const Utils = require('./Utils');

class App {
  #appStatus = 1;

  #bridgeAnswer;

  #bridge;

  #brdigeGame = new BridgeGame();

  #moveAnswer;

  #bridgeMap = new BridgeMap();

  #moveStatement;

  #gameStaus;

  play() {
    OutputView.printStart();
    this.progressApp(this.#appStatus);
  }

  progressApp(appStatus) {
    if (appStatus === 1) return this.progressBridgeMake();
    if (appStatus === 2) {
      this.#appStatus = 3;
      this.#bridge = BridgeMaker.makeBridge(this.#bridgeAnswer);
      return this.progressBridgeMove();
    }
    if (appStatus === 3) return this.progressBridgeMove();
    if (appStatus === 4) {
      this.#moveStatement = this.#brdigeGame.move(this.#moveAnswer, this.#bridge);
      console.log(this.#moveStatement);
      if (this.#moveStatement) {
        this.#bridgeMap.handleMap(this.#moveStatement, this.#bridge);
        this.#nowBridgeLength = this.#brdigeGame.getNumberOfTry();
        return this.progressBridgeMove();
      }
      if (!this.#moveStatement) {
        this.#bridgeMap.handleMap(this.#moveStatement, this.#bridge);
        this.#appStatus = 5;
        return this.progressRetryGame();
      }
    }
    if (this.#appStatus === 5) return this.progressRetryGame();
    if (this.#appStatus === 6) {
      if (this.#gameStaus) return this.play();
      if (!this.#gameStaus) {
        OutputView.printResult(
          this.#bridgeMap.getMap(),
          this.#brdigeGame.getNumberOfTry(),
          this.#gameStaus,
        );
      }
    }
  }

  progressBridgeMake() {
    InputView.readBridgeSize((answer) => {
      try {
        Validator.checkBridgeInput(answer);
        this.#bridgeAnswer = +answer;
        this.#appStatus = 2;
      } catch (e) {
        console.log(e, '예외발생');
      } finally {
        this.progressApp(this.#appStatus);
      }
    });
  }

  progressBridgeMove() {
    InputView.readMoving((answer) => {
      try {
        Validator.confirmOfCondition(answer, 'move');
        this.#moveAnswer = answer;
        this.#appStatus = 4;
      } catch (e) {
        console.log(e, '예외발생');
      } finally {
        this.progressApp(this.#appStatus);
      }
    });
  }

  progressRetryGame() {
    InputView.readGameCommand((answer) => {
      try {
        Validator.confirmOfCondition(answer, 'option');
        this.#gameStaus = this.#brdigeGame.retry(answer);
        this.#appStatus = 6;
      } catch (e) {
        console.log(e, '예외발생');
      } finally {
        this.progressApp(this.#appStatus);
      }
    });
  }
}

module.exports = App;

const app = new App();

console.log(app.play());

// 실패가 되면 메서드를 재실행시켜야됨
