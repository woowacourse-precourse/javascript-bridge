const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridgeAnswer;

  #bridgeMap;

  #correctStep;

  #gameStatus;

  setUp(bridgeLength) {
    // TODO: validation of bridge length
    this.#bridgeAnswer = BridgeMaker.makeBridge(
      bridgeLength,
      BridgeRandomNumberGenerator.generate
    );
    this.#bridgeMap = {
      U: Array(bridgeLength).fill(' '),
      D: Array(bridgeLength).fill(' '),
    };
    this.#correctStep = 0;
    this.#gameStatus = {
      numberOfAttempts: 1,
      isSuccess: false,
      isFinished: false,
    };
  }
}

module.exports = BridgeGame;
