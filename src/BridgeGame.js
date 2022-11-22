const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const { PAD, COMMAND } = require('./Constants');
/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridge;
  passedUpperBridgePads;
  passedLowerBridgePads;
  tries;
  numberOfPads;

  constructor(bridgeSize) {
    this.#bridge = BridgeMaker.makeBridge(bridgeSize, BridgeRandomNumberGenerator.generate);
    this.tries = 1;
    this.#initialize();
  }

  #initialize() {
    this.passedUpperBridgePads = [];
    this.passedLowerBridgePads = [];
    this.numberOfPads = 0;
  }
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(moving) {
    const isCorrectPad = this.#isCorrectPad(moving, this.numberOfPads);
    const pad = isCorrectPad ? PAD.CORRECT_PAD : PAD.WRONG_PAD;
    this.#pushPad(moving, pad);
    this.#nextStep();
    return isCorrectPad;
  }

  #isCorrectPad(moving, numberOfPads) {
    if (moving === this.#bridge[numberOfPads]) return true;
    if (moving !== this.#bridge[numberOfPads]) return false;
  }

  #pushPad(moving, pad) {
    if (moving === PAD.UP) {
      this.passedUpperBridgePads.push(pad);
      this.passedLowerBridgePads.push(PAD.NON_EXISTANT_PAD);
      return;
    }
    if (moving === PAD.DOWN) {
      this.passedUpperBridgePads.push(PAD.NON_EXISTANT_PAD);
      this.passedLowerBridgePads.push(pad);
      return;
    }
  }

  #nextStep() {
    this.numberOfPads += 1;
  }

  isOver() {
    if (this.passedUpperBridgePads.length === this.#bridge.length) {
      return true;
    }
    return false;
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry(command) {
    if (command === COMMAND.RETRY) {
      this.tries += 1;
      this.#initialize();
      return true;
    }
    if (command === COMMAND.QUIT) {
      return false;
    }
  }
}

module.exports = BridgeGame;
