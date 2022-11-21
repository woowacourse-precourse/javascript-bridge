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
    this.bridgeSize = 0;
    this.bridge = [];
    this.tryCount = 0;
    this.myMoves = [];
  }

  /**
   * 사용자가 게임을 처음 시작할 때 사용하는 메서드
   */
  start() {
    OutputView.printStart();
    // this.bridgeSize = InputView.readBridgeSize();
    this.bridgeSize = InputView.getBridgeSize();
    this.makeBridge();
    this.playGame();
  }

  /**
   * 다리 생성
   */
  makeBridge() {
    this.bridge = BridgeMaker.makeBridge(this.bridgeSize, makeRandomNumber);
  }

  /**
   * 게임 한 판 진행
   */
  playGame() {
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
      currentIndex + 1 === this.bridgeSize
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

  winGame() {
    const map = OutputView.getMap(this.myMoves, this.bridge);
    OutputView.printResult(map, RESULT.WIN, this.tryCount);
  }

  move() {
    const currentMove = InputView.getMoving();
    // const currentMove = this.bridgeGame.move();
    this.myMoves.push(currentMove);
    OutputView.printMap(this.myMoves, this.bridge);
    if (this.validateWin()) {
      this.winGame();
      return;
    }
    if (!this.validateMove()) {
      // X 나오면서 게임 끝
      return;
    }
    this.move();
  }
}

module.exports = BridgeGamePlay;
