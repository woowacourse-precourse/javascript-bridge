const BridgeMaker = require('./BridgeMaker');
const InputView = require('./InputView');
const OutputView = require('./OutputView');
const { RESULT } = require('./constant/constant');
const { makeRandomNumber } = require('./utils/util');
const BridgeGame = require('./BridgeGame');

/**
 * 다리 건너기 게임 진행을 관리하는 클래스
 */
class BridgeGamePlay {
  constructor() {
    this.bridgeGame = new BridgeGame();
    this.bridge = [];
    this.tryCount = 0;
    this.myMoves = [];
  }

  /**
   * 사용자가 게임을 처음 시작할 때 사용하는 메서드
   */
  start() {
    OutputView.printStart();
    const bridgeSize = InputView.getBridgeSize();
    this.makeBridge(bridgeSize);
    this.playGame();
  }

  /**
   * 다리 생성
   */
  makeBridge(bridgeSize) {
    this.bridge = BridgeMaker.makeBridge(bridgeSize, makeRandomNumber);
  }

  /**
   * 게임 한 판 진행
   */
  playGame() {
    this.myMoves = [];
    this.tryCount += 1;
    this.move();
  }

  /**
   * 게임 이겼는지 확인
   */
  validateWin() {
    const currentIndex = this.myMoves.length - 1;
    if (
      this.myMoves[currentIndex] === this.bridge[currentIndex] &&
      currentIndex + 1 === this.bridge.length
    ) {
      return true;
    }
    return false;
  }

  /**
   * 게임 이동 가능한지 확인
   */
  validateMove() {
    const currentIndex = this.myMoves.length - 1;
    if (this.myMoves[currentIndex] !== this.bridge[currentIndex]) {
      return false;
    }
    return true;
  }

  move() {
    const currentMove = InputView.getMoving();
    this.myMoves.push(currentMove);
    const currentBridge = this.bridgeGame.move(this.myMoves, this.bridge);
    const currentMyMoves = this.bridgeGame.move(this.myMoves, this.myMoves);
    const result = this.bridgeGame.compareBridge(currentMyMoves, currentBridge);
    OutputView.printMap(result);
    this.checkIfWin(result);
    this.checkIfFinish(result);
  }

  checkIfWin(result) {
    if (this.validateWin()) {
      OutputView.printResult(result, RESULT.WIN, this.tryCount);
    }
  }

  checkRetry(result, gameCommand) {
    if (!this.bridgeGame.retry(gameCommand)) {
      OutputView.printResult(result, RESULT.FAIL, this.tryCount);
    }
    if (this.bridgeGame.retry(gameCommand)) {
      this.playGame();
    }
  }

  checkIfFinish(result) {
    if (!this.validateMove()) {
      const gameCommand = InputView.getGameCommand();
      this.checkRetry(result, gameCommand);
    }
    if (this.validateMove() && !this.validateWin()) {
      this.move();
    }
  }
}

module.exports = BridgeGamePlay;
