const Bridge = require('./Bridge');
const BridgeMaker = require('../BridgeMaker');
const BridgeRandomNumberGenerator = require('../BridgeRandomNumberGenerator');
const BridgeGameStatus = require('./BridgeGameStatus');

const BridgeMap = require('./BridgeMap');
const { SizeCommand, MovingCommand } = require('./command');

/**
 * 게임 종료 시점 상태 객체 타입 정의
 * @typedef {Object} FinalStatus
 * @property {BridgeMap} bridgeMap
 * @property {boolean} isWin
 * @property {number} tryCount
 */

/**
 * 다리 건너기 게임을 관리하는 클래스
 * @class
 */
class BridgeGame {
  /**
   * 다리 타입
   * @type {Bridge}
   */
  #bridge;

  /**
   * 게임 상태 타입
   * @type {BridgeGameStatus}
   */
  #status;

  /**
   * 게임 시작할 때 사용하는 메서드
   */
  start() {
    this.#status = new BridgeGameStatus();
    this.#status.increaseTryCount();
  }

  /**
   * 다리 설정할 때 사용하는 메서드
   * @param {SizeCommand} sizeCommand 사이즈 입력 커맨드 인스턴스
   */
  setBridge(sizeCommand) {
    const size = sizeCommand.getSizeNumber();
    const bridge = BridgeMaker.makeBridge(size, BridgeRandomNumberGenerator.generate);
    this.#bridge = new Bridge(bridge);
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * @param {MovingCommand} movingCommand 이동 입력 커맨드 인스턴스
   * @return {'U' | 'D'} 이동한 위치의 다리 요소
   */
  move(movingCommand) {
    this.#status.increaseLocation();
    this.#bridge.addMap(movingCommand, this.#status.getLocation());

    return this.#bridge.current(this.#status.getLocation());
  }

  /**
   * 다리 지도 가져올 때 사용하는 메서드
   * @return {BridgeMap} 다리 지도 인스턴스
   */
  getMap() {
    return this.#bridge.getMap();
  }

  /**
   * 게임 승리 여부 확인하는 메서드
   * @param {boolean} isCrossed 해당 칸 건넜는지 성공 여부
   * @return {boolean} 게임 승리 여부
   */
  isWin(isCrossed) {
    return this.#bridge.isLastLocation(this.#status.getLocation()) && isCrossed;
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   */
  retry() {
    this.#bridge.resetMap();
    this.#status.resetLocation();
    this.#status.increaseTryCount();
  }

  /**
   * 게임 종료할 때 사용하는 메서드
   * @param {boolean} isCrossed 해당 칸 건넜는지 성공 여부
   * @return {FinalStatus} 마지막 게임 상태 객체
   */
  quit(isCrossed) {
    const bridgeMap = this.getMap();
    const isWin = this.isWin(isCrossed);
    const tryCount = this.#status.getTryCount();

    return { bridgeMap, isWin, tryCount };
  }
}

module.exports = BridgeGame;
