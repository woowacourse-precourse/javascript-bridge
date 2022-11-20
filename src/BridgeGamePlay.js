const BridgeMaker = require('./BridgeMaker');
const InputView = require('./InputView');
const OutputView = require('./OutputView');
const { makeRandomNumber } = require('./utils/util');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');

/**
 * 다리 건너기 게임 진행을 관리하는 클래스
 */
class BridgeGamePlay {
  constructor() {
    this.bridgeSize = 0;
    this.bridge = [];
    this.tryCount = 0;
  }

  /**
   * 사용자가 게임을 처음 시작할 때 사용하는 메서드
   */
  start() {
    OutputView.printStart();
    // this.bridgeSize = InputView.readBridgeSize();
    this.bridgeSize = InputView.getBridgeSize();
    this.makeBridge();
  }

  /**
   * 다리 생성
   */
  makeBridge() {
    this.bridge = BridgeMaker.makeBridge(this.bridgeSize, BridgeRandomNumberGenerator.generate);
  }

  /**
   * 게임 한 판 진행
   */
  playGame() {
    this.tryCount += 1;
  }
}

module.exports = BridgeGamePlay;
