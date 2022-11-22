/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #answer
  #user
  #result
  #map

  constructor(){
    this.#answer = [];
    this.#user = '';
    this.#result = true;
    this.#map=[[],[]];
  }

  setAnswer(answer){
    this.#answer = answer;
  }

  setUser(user){
    this.#user = user;
  }

  getMap(){
    return this.#map;
  }

  getResult(){
    return this.#result;
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */

  move(now) {
    this.makeIMap(now);
    if (this.#answer[now] === this.#user) {
      this.makeOMap();
      return true;
    }

    this.#result = false;
    this.makeXMap();
    return false;
  }

  makeOMap() {
    if (this.#user === 'U') {
      this.#map[0].push('O');
      this.#map[1].push(' ');
    } else {
      this.#map[1].push('O');
      this.#map[0].push(' ');
    }
  }

  makeXMap() {
    if (this.#user === 'U') {
      this.#map[0].push('X');
      this.#map[1].push(' ');
    } else {
      this.#map[1].push('X');
      this.#map[0].push(' ');
    }
  }

  makeIMap(now) {
    if (now !== 0) {
      this.#map[0].push('|');
      this.#map[1].push('|');
    }
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry(charRetry) {
    if (charRetry === 'Q') return false;

    this.#map=[[],[]];
    this.#result = true;
    return true;
  }
}

module.exports = BridgeGame;
