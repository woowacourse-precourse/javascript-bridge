const BridgeMaker = require('../BridgeMaker');
const { generate } = require('./BridgeRandomNumberGenerator');
const { SUCCESS, FAIL, CONTINUE, ANSWER, WRONG, EMPTY } =
  require('../Utils/Constant').BRIDGE;
const { UP, DOWN } = require('../Utils/Constant').DIRECTION;

class BridgeMap {
  #bridge;
  #bridgeObject;
  #userAnswer;
  #bridgeSize;

  constructor(bridgeSize) {
    this.#bridgeSize = bridgeSize;
    this.#bridge = BridgeMaker.makeBridge(bridgeSize, generate);
    this.convertObj();
    this.resetUserAnswer();
  }

  /**
   *
   * @param {string} userMove
   * @param {string} userPosition
   * @returns String DONE, FAIL, CONTINUE
   * @desc 다리를 건너는 메서드로 반환값을 통해 현재 사용자의 상태를 알 수 있다.
   */
  move(userMove, userPosition) {
    let status;
    this.isMove(userMove, userPosition)
      ? (status = this.correctMove(userPosition))
      : (status = this.wrongMove(userMove, userPosition));
    return status;
  }

  /**
   *
   * @param {string} userMove
   * @param {string} userPosition
   * @returns  boolean
   * @desc 사용자의 이동이 올바른지 확인하는 메서드
   */
  isMove(userMove, userPosition) {
    return this.#bridgeObject[userMove][userPosition] === ANSWER;
  }

  /**
   *
   * @param {string} userPosition
   * @returns string DONE, CONTINUE
   * @desc 사용자의 이동이 올바른 경우 다음 이동을 진행할지 확인하는 메서드
   */
  correctMove(userPosition) {
    return this.isComplete(userPosition) ? SUCCESS : CONTINUE;
  }

  /**
   *
   * @param {string} userMove
   * @param {string} userPosition
   * @returns String FAIL
   * @desc 사용자의 이동이 올바르지 않을경우 사용자의 정답을 초기화하고 FAIL을 반환하는 메서드
   */
  wrongMove(userMove, userPosition) {
    Object.keys(this.#userAnswer).map((key) => {
      key === userMove
        ? (this.#userAnswer[key][userPosition] = WRONG)
        : (this.#userAnswer[key][userPosition] = EMPTY);
    });
    return FAIL;
  }

  /**
   * @param {string} userPosition
   * @returns boolean
   * @desc 사용자의 이동이 완료되었는지 확인하는 메서드
   */
  isComplete(userPosition) {
    return this.#bridgeSize - 1 === userPosition;
  }

  /**
   * @param {string} userPosition
   * @returns stringArray
   * @desc 사용자의 현재 위치를 기준으로 다리를 출력하는 메서드
   */
  getBridgeStr(userPosition) {
    let result = [];
    Object.keys(this.#userAnswer).map((key) => {
      result.push(this.#userAnswer[key].slice(0, userPosition + 1).join(' | '));
    });
    return result;
  }

  /**
   * @desc 사용자의 정답을 초기화하는 메서드
   */
  resetUserAnswer() {
    let reset = {};
    for (let key in this.#bridgeObject) {
      reset[key] = this.#bridgeObject[key].slice();
    }
    this.#userAnswer = reset;
  }

  convertObj() {
    let obj = { [UP]: [], [DOWN]: [] };
    for (let i of this.#bridge) {
      obj[UP].push(i === UP ? ANSWER : EMPTY);
      obj[DOWN].push(i === DOWN ? ANSWER : EMPTY);
    }
    this.#bridgeObject = obj;
  }
}

module.exports = BridgeMap;
