/**
 * 다리 건너기 게임을 관리하는 클래스
 */
const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");

class BridgeGame {
  #bridge;
  #usersMove;
  #moveCount;
  #gameOver;
  #tryCount;
  
  constructor() {
    this.#bridge = [];
    this.#usersMove = [];
    this.#moveCount = 0;
    this.#gameOver = false;
    this.#tryCount = 1;
  }

  makeBridge(bridgeSize) {
    this.#bridge = BridgeMaker.makeBridge(bridgeSize, BridgeRandomNumberGenerator.generate);
    console.log(this.#bridge);
  }

  /**
* 사용자가 칸을 이동할 때 사용하는 메서드
* <p>
* 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
*/
  move(inputMoving) {
    console.log(this.#bridge);
    if (this.#bridge[this.#moveCount] === inputMoving) {
      this.#usersMove.push([inputMoving, 'O']);
    } else {
      this.#usersMove.push([inputMoving, 'X']);
      this.#gameOver = true;
    } 
    this.#moveCount += 1;

    return this.#usersMove;
  }

  checkCurrentStatus() {
    if (this.#gameOver === true) {
      return "gameOver"
    }

    if (this.#moveCount === this.#bridge.length) {
      return "arrival"
    }
  }

  /**
  * 사용자가 게임을 다시 시도할 때 사용하는 메서드
  * <p>
  * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
  */
  retry() {
    this.#moveCount = 0;
    this.#tryCount += 1;
    this.#usersMove = [];
    this.#gameOver = false;
  }

  endResult() {
    return [this.#usersMove, this.#gameOver, this.#tryCount];
  }
}

module.exports = BridgeGame;
 