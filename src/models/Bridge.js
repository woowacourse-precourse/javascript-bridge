const BridgeMap = require('./BridgeMap');
const { MovingCommand } = require('./command');

/**
 * 다리 클래스
 * @class
 */
class Bridge {
  /**
   * 다리 상태 타입
   * @type {string[]}
   */
  #state;

  /**
   * 다리 지도 타입
   * @type {BridgeMap}
   */
  #map;

  /**
   * 다리 생성
   * @param {string[]} bridge 다리 배열
   */
  constructor(bridge) {
    this.#state = bridge;
    this.#map = new BridgeMap();
  }

  /**
   * 현재 위치 요소를 찾을 때 사용하는 매서드
   * @param {number} location 현재 위치
   * @return {'U' | 'D'} 현재 위치 요소
   */
  current(location) {
    return this.#state[location];
  }

  /**
   * 마지막 위치인지 확인할 때 사용하는 메서드
   * @param {number} location 현재 위치
   * @return {boolean} 마지막 위치인지 여부
   */
  isLastLocation(location) {
    return this.#state.length - 1 === location;
  }

  /**
   * 다리 지도 가져올 때 사용하는 메서드
   * @returns {BridgeMap}
   */
  getMap() {
    return this.#map;
  }

  /**
   * 지도 추가할 때 사용하는 메서드
   * @param {MovingCommand} movingCommand 이동 커맨드 인스턴스
   * @param {number} location 현재 위치
   */
  addMap(movingCommand, location) {
    this.#map.add(movingCommand, this.current(location));
  }

  /**
   * 지도 초기화할 때 사용하는 메서드
   */
  resetMap() {
    this.#map.reset();
  }
}

module.exports = Bridge;
