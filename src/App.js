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

  #gameEndConditionValue;

  #brdigeGame = new BridgeGame();

  #moveAnswer;

  #bridgeMap = new BridgeMap();

  #moveStatement;

  #gameOptionStatus;

  #gameEndBoolean = false;

  play() {
    OutputView.printStart();
    this.progressApp(this.#appStatus);
  }

  progressApp(appStatus) {
    if (appStatus === 1) return this.questionBridgeMake();
    if (appStatus === 2) return this.runBridgeMake();
    if (appStatus === 3) return this.questionBridgeMove();
    if (appStatus === 4) return this.runBridgeMove();
    if (this.#appStatus === 5) return this.questionGameRetry();
    if (this.#appStatus === 6) return this.runGameRetry();
    return this.progressApp(this.#appStatus);
  }

  questionBridgeMake() {
    InputView.readBridgeSize((answer) => {
      try {
        Validator.checkBridgeInput(answer);
        this.#bridgeAnswer = +answer;
        this.#appStatus = 2;
      } catch (e) {
        Utils.print(e);
      } finally {
        this.progressApp(this.#appStatus);
      }
    });
  }

  runBridgeMake() {
    this.#appStatus = 3;
    this.#bridge = BridgeMaker.makeBridge(this.#bridgeAnswer);
    this.#gameEndConditionValue = this.#bridge.length;
    return this.questionBridgeMove();
  }

  questionBridgeMove() {
    InputView.readMoving((answer) => {
      try {
        Validator.confirmOfCondition(answer, 'move');
        this.#moveAnswer = answer;
        this.#appStatus = 4;
      } catch (e) {
        Utils.print(e);
      } finally {
        this.progressApp(this.#appStatus);
      }
    });
  }

  runBridgeMove() {
    this.#moveStatement = this.#brdigeGame.move(this.#moveAnswer, this.#bridge);
    if (this.#moveStatement) return this.progressMovementTrue();
    return this.progressMovementFalse();
  }

  progressMovementTrue() {
    this.#bridgeMap.handleMap(this.#moveStatement, this.#moveAnswer);
    OutputView.printMap(this.#bridgeMap.getMap());
    if (this.#gameEndConditionValue === this.#brdigeGame.getBridgeLengthStatus()) {
      return this.progressGameEnd();
    }
    return this.questionBridgeMove();
  }

  progressMovementFalse() {
    this.#bridgeMap.handleMap(this.#moveStatement, this.#moveAnswer);
    this.#appStatus = 5;
    OutputView.printMap(this.#bridgeMap.getMap());
    return this.questionGameRetry();
  }

  progressGameEnd() {
    this.#gameEndBoolean = true;
    return this.getResult();
  }

  // validAssign(answer, Validator) {}

  questionGameRetry() {
    InputView.readGameCommand((answer) => {
      try {
        Validator.confirmOfCondition(answer, 'option');
        this.#gameOptionStatus = this.#brdigeGame.retry(answer);
        this.#appStatus = 6;
      } catch (e) {
        Utils.print(e);
      } finally {
        this.progressApp(this.#appStatus);
      }
    });
  }

  runGameRetry() {
    if (this.#gameOptionStatus) {
      this.retryApp();
      this.#appStatus = 3;
      return this.progressApp(this.#appStatus);
    }
    return this.getResult();
  }

  getResult() {
    return OutputView.printResult(
      this.#bridgeMap.getMap(),
      this.#brdigeGame.getNumberOfTry(),
      this.#gameEndBoolean,
    );
  }

  retryApp() {
    this.#brdigeGame.initBridgeLengthStatus();
    this.#bridgeMap.initBridgeMap();
    this.#brdigeGame.incrementNumberOfTry();
  }
}

module.exports = App;

const app = new App();

console.log(app.play());

// 실패가 되면 메서드를 재실행시켜야됨
