const Validate = require("./Validate");
const { makeBridge } = require("./BridgeMaker");
const { generate } = require("./BridgeRandomNumberGenerator");
const { MOVING, RETRY, RESULT, CONTROL } =  require("./constants/Values");
const{ Console } = require("@woowacourse/mission-utils"); //테스트용 추가, 완료 후 삭제

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridgeInformation;
  #userInformation;
  #countGame;

  constructor() {
    this.#bridgeInformation = { bridge: [] };
    this.#userInformation = { track: [] };
    this.#countGame = 1;
  }

  ready(size) {
    const validate = new Validate();
    validate.validateBridgeSize(size);
    const bridge = makeBridge(Number(size), generate);
    this.#bridgeInformation.bridge = bridge;
    Console.print(this.#bridgeInformation.bridge) //테스트용 추가, 완료 후 삭제
    this.addBridgeCondition();
  }

  addBridgeCondition() {
    const bridgeSize = this.#bridgeInformation.bridge.length;
    this.#bridgeInformation.upside = new Array(bridgeSize + 1).fill(MOVING.PASS);
    this.#bridgeInformation.downside = new Array(bridgeSize + 1).fill(MOVING.PASS);
    for(let index = 0; index < bridgeSize; index++) {
      if(this.#bridgeInformation.bridge[index] === MOVING.UPSIDE_STRING) this.#bridgeInformation.downside.splice(index, 1, MOVING.UNPASSED);
      if(this.#bridgeInformation.bridge[index] === MOVING.DOWNSIDE_STRING) this.#bridgeInformation.upside.splice(index, 1, MOVING.UNPASSED);
    }
  }
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(moving) {
    const validate = new Validate();
    validate.validateMove(moving);
    const step = this.#userInformation.track.length;
    if(moving === MOVING.UPSIDE_STRING) this.#bridgeInformation.downside.splice(step, 1, MOVING.BLANK);
    if(moving === MOVING.DOWNSIDE_STRING) this.#bridgeInformation.upside.splice(step, 1, MOVING.BLANK);
    this.#userInformation.upside = this.#bridgeInformation.upside.slice(0, step + 1);
    this.#userInformation.downside = this.#bridgeInformation.downside.slice(0, step + 1);
    this.getRecordSteps();
    this.#userInformation.track.push(moving);
  }

  getRecordSteps() {
    let recordAllSteps = [];
    recordAllSteps.push(this.#userInformation.upside.join(MOVING.JUMP),this.#userInformation.downside.join(MOVING.JUMP));
    return recordAllSteps;
  }

  getCurrentCondition() {
    if(this.#userInformation.upside.indexOf(MOVING.UNPASSED) > -1 || this.#userInformation.downside.indexOf(MOVING.UNPASSED) > -1) return CONTROL.GAME_OVER;
    if(this.#userInformation.track.length !== this.#bridgeInformation.bridge.length) return CONTROL.PASS_STEP;
    if(this.#userInformation.track.length === this.#bridgeInformation.bridge.length) {
      this.getRecordSteps();
      this.getSucessValue();
      return CONTROL.GAME_END;
    }
  }

  getSucessValue() {
    let lastStep = this.getRecordSteps();
    if(lastStep[0].length !== this.#bridgeInformation.bridge.length) return RESULT.FAIL;
    if(lastStep[0].indexOf(MOVING.UNPASSED) > -1 || lastStep[1].indexOf(MOVING.UNPASSED) > -1) return RESULT.FAIL;
    if(lastStep[0].length === this.#bridgeInformation.bridge.length) return RESULT.SUCCESS;
  }

  
  getCountReplyNumber() {
    return this.#countGame;
  }
  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {

  }
}

module.exports = BridgeGame;
