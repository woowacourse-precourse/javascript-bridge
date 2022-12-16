const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const { generate } = BridgeRandomNumberGenerator;
const { ERROR, INFO } = require('./Const');

class BridgeGame {
  bridgeInputs;
  movings = [];
  steps;
  trials = 1;
  result = INFO.FAIL;
  log = {
    movings: this.movings,
    bridgeInputs: this.bridgeInputs,
    trials: this.trials,
    result: this.result
  };

  constructor(size) {
    this.bridgeSize = size;
  }

  setMoving(input) {
    this.movings.push(input);
    this.steps = this.movings.length;
  }

  setBridgeInput() {
    this.bridgeInputs = BridgeMaker.makeBridge(this.bridgeSize, generate);
  }

  getMatching(index) {
    if (this.movings[index] === this.bridgeInputs[index]) return true;
    if (this.movings[index] !== this.bridgeInputs[index]) return false;
  }

  win() {
    if (this.steps === this.bridgeInputs.length && this.getMatching(this.steps - 1)) {
      this.result = INFO.PASS;
      return true;
    }
  }

  lose() {
    if (!this.getMatching(this.steps - 1)) return true;
  }

  move() {
    if (this.steps !== this.bridgeInputs.length && this.getMatching(this.steps - 1)) return true;
  }

  retry(RorQ) {
    if (RorQ === 'R') {
      this.trials++;
      this.movings = [];
      return true
    }
    if (RorQ === 'Q') {
      return false
    }
  }

  isVaildSize(number) {
    if (number < INFO.LENGTH_MIN || number > INFO.LENGTH_MAX) throw new Error(ERROR.SIZE_RANGE);
    if (isNaN(number)) throw new Error(ERROR.SIZE_CHARACTER);
    if (number % 1 !== 0) throw new Error(ERROR.SIZE_INTEGER);
  }

  isValidMoving(UorD) {
    if (UorD.length !== 1) throw new Error(ERROR.MOVING_ONE);
    if (/[a-z]/.test(UorD)) throw new Error(ERROR.MOVING_CAPITAL);
    if (/[^UD]/.test(UorD)) throw new Error(ERROR.MOVING_CHARACTER);
  }

  isVaildCommand(RorQ) {
    if (RorQ.length !== 1) throw new Error(ERROR.COMMAND_ONE);
    if (/[a-z]/.test(RorQ)) throw new Error(ERROR.COMMAND_CAPITAL);
    if (/[^RQ]/.test(RorQ)) throw new Error(ERROR.COMMAND_CHARACTER);
  }
}

module.exports = BridgeGame;
