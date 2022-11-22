const { MovingCommand } = require('./command');
const BridgeMaps = require('./map/BridgeMaps');

/**
 * 다리 클래스
 * @class
 */
class Bridge {
  #state;

  #map;

  /**
   * 다리 생성
   * @param {string[]} bridge 다리 배열
   */
  constructor(bridge) {
    this.#state = bridge;
    this.#map = new BridgeMaps();
  }

  /**
   * 현재 위치 요소를 찾을 때 사용하는 매서드
   * @param {number} location 현재 위치
   * @return {'U' | 'D'} 현재 위치 요소
   */
  getCurrentBridge(location) {
    return this.#state[location];
  }

  /**
   * 다리 사이즈 가져올 때 사용하는 메서드
   * @returns {number}
   */
  getSize() {
    return this.#state.length;
  }

  /**
   * 다리 지도 가져올 때 사용하는 메서드
   * @returns {BridgeMaps}
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
    this.#map.add(movingCommand, this.getCurrentBridge(location));
  }

  /**
   * 지도 초기화할 때 사용하는 메서드
   */
  resetMap() {
    this.#map.reset();
  }
}

module.exports = Bridge;
