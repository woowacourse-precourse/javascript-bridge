/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridges;
  #history;

  constructor(bridges) {
    this.#bridges = bridges;
    this.#history = [];
  }
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(selection) {
    const location = this.getLastCrossable() ? this.getNextLocation() : 0;
    const crossable = this.check(location, selection);
    this.#history.push({ location, selection, crossable });

    return crossable;
  }

  getNextLocation() {
    if (this.#history.length === 0) {
      return 0;
    }
    return [...this.#history].reverse().find((element) => element.crossable === true).location + 1;
  }

  getLastCrossable() {
    if (this.#history.length === 0) {
      return true;
    }
    return this.#history.slice(-1)[0].crossable;
  }

  getPaths() {
    return [...this.#history].reverse().reduce((paths, cur) => {
      if (paths.length === 0) {
        return [cur];
      }
      if (paths.slice(-1)[0].location - 1 === cur.location) {
        return [...paths, cur];
      }
      return [...paths];
    }, []);
  }

  check(location, selection) {
    return this.#bridges[location] === selection;
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry(command) {
    return command === 'R';
  }

  isEnd() {
    return this.#bridges.length - 1 === this.#history.slice(-1)[0].location;
  }

  getTrials() {
    return this.#history.filter((element) => element.location === 0).length;
  }
}

module.exports = BridgeGame;
