const InputView = require('./InputView');
const BridgeMaker = require('./BridgeMaker');
const OutputView = require('./OutputView');
const Validator = require('./Validator');
const BridgeGame = require('./BridgeGame');
const BridgeMap = require('./BridgeMap');
const Utils = require('./Utils');

class App {
  #appStatus = 1;

  #bridge;

  #gameEndConditionValue;

  #brdigeGame = new BridgeGame();

  #bridgeMap = new BridgeMap();

  #moveStatement;

  #gameEndBoolean = false;

  play() {
    OutputView.printStart();
    this.progressApp(this.#appStatus);
  }

  progressApp(appStatus) {
    if (appStatus === 1) return this.questionBridgeMake();
    if (appStatus === 3) return this.questionBridgeMove();
    if (this.#appStatus === 5) return this.questionGameRetry();
    // if (this.#appStatus === 6) return this.runGameRetry();
    return this.progressApp(this.#appStatus);
  }

  questionBridgeMake() {
    InputView.readBridgeSize((bridgeAnswer) => {
      try {
        Validator.checkBridgeInput(bridgeAnswer);
        this.runBridgeMake(+bridgeAnswer);
        this.#appStatus = 3;
      } catch (e) {
        Utils.print(e);
        this.progressApp(this.#appStatus);
      }
    });
  }

  runBridgeMake(bridgeAnswer) {
    this.#bridge = BridgeMaker.makeBridge(bridgeAnswer);
    this.#gameEndConditionValue = this.#bridge.length;
    return this.questionBridgeMove();
  }

  questionBridgeMove() {
    InputView.readMoving((moveAnswer) => {
      try {
        Validator.confirmOfCondition(moveAnswer, 'move');
        this.runBridgeMove(moveAnswer);
        this.#appStatus = 5;
      } catch (e) {
        Utils.print(e);
        this.progressApp(this.#appStatus);
      }
    });
  }

  runBridgeMove(moveAnswer) {
    this.#moveStatement = this.#brdigeGame.move(moveAnswer, this.#bridge);
    if (this.#moveStatement) return this.progressMovementTrue(moveAnswer);
    return this.progressMovementFalse(moveAnswer);
  }

  progressMovementTrue(moveAnswer) {
    this.#bridgeMap.handleMap(this.#moveStatement, moveAnswer);
    OutputView.printMap(this.#bridgeMap.getMap());
    if (this.#gameEndConditionValue === this.#brdigeGame.getBridgeLengthStatus()) {
      return this.progressGameEnd();
    }
    return this.questionBridgeMove();
  }

  progressMovementFalse(moveAnswer) {
    this.#bridgeMap.handleMap(this.#moveStatement, moveAnswer);
    OutputView.printMap(this.#bridgeMap.getMap());
    return this.questionGameRetry();
  }

  progressGameEnd() {
    this.#gameEndBoolean = true;
    return this.getResult();
  }

  // validAssign(answer, Validator) {}

  questionGameRetry() {
    InputView.readGameCommand((retryAnswer) => {
      try {
        Validator.confirmOfCondition(retryAnswer, 'option');
        this.runGameRetry(this.#brdigeGame.retry(retryAnswer));
      } catch (e) {
        Utils.print(e);
        this.progressApp(this.#appStatus);
      }
    });
  }

  runGameRetry(retryAnswer) {
    if (retryAnswer) {
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
