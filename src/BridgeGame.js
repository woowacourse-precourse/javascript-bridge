const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');

/**
 * 다리 건너기 게임을 관리하는 클래스
 * BridgeGame 클래스에서 InputView, OutputView 를 사용하지 않는다.
 * 제공된 BridgeGame 클래스를 활용해 구현해야 한다.
 * BridgeGame에 필드(인스턴스 변수)를 추가할 수 있다.
 * BridgeGame의 파일 경로는 변경할 수 있다.
 * BridgeGame의 메서드의 이름은 변경할 수 없고, 인자는 필요에 따라 추가하거나 변경할 수 있다.
 * 게임 진행을 위해 필요한 메서드를 추가 하거나 변경할 수 있다.
 */
class BridgeGame {
  #bridge;
  #movingLog;
  #tryCount;
  #isPlaying;

  constructor() {
    this.#bridge = [];
    this.#movingLog = [];
    this.#tryCount = 1;
    this.#isPlaying = true;
  }

  get isPlaying() {
    return this.#isPlaying;
  }

  get tryCount() {
    return this.#tryCount;
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(moving) {
    // TODO: validate moving
    if (moving === this.#bridge[this.#movingLog.length]) {
      this.#movingLog.push(moving);
      this.#isPlaying = true;
    } else {
      this.#movingLog.push(moving);
      this.#isPlaying = false;
    }
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    this.#movingLog = [];
    this.#tryCount++;
  }

  /**
   * 길이를 입력받으면 다리를 생성
   */
  setBridge(length) {
    this.#bridge = BridgeMaker.makeBridge(length, BridgeRandomNumberGenerator.generate);
    console.log(this.#bridge);
  }
  /**
   * 길이비교를 하여 다 건넜는지 확인하고, isPlaying으로 실패한건 아닌지 확인
   */
  isWin() {
    return this.#bridge.length === this.#movingLog.length && this.#isPlaying;
  }
}

module.exports = BridgeGame;
