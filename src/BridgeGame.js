const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const { generate } = BridgeRandomNumberGenerator;
/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  bridgeInputs;
  userInputs = [];
  steps;
  trials = 1;
  result = '실패';
  log = { userInputs: this.bridgeInputs, bridgeInputs: this.bridgeInputs, trials: this.trials, result: this.result };
  constructor(size) {
    this.bridgeSize = size;
  }
  setUserInput(input) {
    this.userInputs.push(input);
  }
  setSteps() {
    this.steps = this.userInputs.length;
  }
  setBridgeInput() {
    this.bridgeInputs = BridgeMaker.makeBridge(this.bridgeSize, generate);
  }
  getMatching(index) {
    if (this.userInputs[index] === this.bridgeInputs[index]) return true;
    if (this.userInputs[index] !== this.bridgeInputs[index]) return false;
  }
  win() {
    if (this.steps === this.bridgeInputs.length && this.getMatching(this.steps - 1)) {
      this.result = '성공';
      return true
    }
  }

  lose() {
    if (!this.getMatching(this.steps - 1)) {
      return true
    }
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move() {
    if (this.steps !== this.bridgeInputs.length && this.getMatching(this.steps - 1)) {
      return true
    }
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry(RorQ) {
    if (RorQ === 'R') {
      this.trials++;
      this.userInputs = [];
      return true
    }
    if (RorQ === 'Q')
      return false
  }

}

module.exports = BridgeGame;
