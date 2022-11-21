const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const BridgeMaker = require("./BridgeMaker");
const Bridge = require("./domain/Bridge");
const { MOVE_VALUE } = require("./constants/index");
const { quitGame } = require("./utils/index");
/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridge;
  #round;
  #up;
  #down;
  #totalTry;

  constructor() {
    this.#round = -1;
    this.#up = [];
    this.#down = [];
    this.#totalTry = 1;
  }

  /**
   * 다리를 만든다.
   * @param {number} length 다리의 길이
   */
  createBridge(length) {
    this.#bridge = new Bridge(
      length,
      BridgeMaker.makeBridge(length, BridgeRandomNumberGenerator.generate)
    );
  }

  /**
   * 사용자가 칸을 이동하고, 라운드를 진행한다.
   * @param {string} move 이동 커맨드
   * @return {boolean} 칸 이동 가능 여부
   */
  move(move) {
    this.#round += 1;

    if (move !== this.#bridge.getMap()[this.#round]) {
      if (move === MOVE_VALUE.UP) this.addUp(MOVE_VALUE.INVALID);
      if (move === MOVE_VALUE.DOWN) this.addDown(MOVE_VALUE.INVALID);
      return false;
    } else {
      if (move === MOVE_VALUE.UP) this.addUp(MOVE_VALUE.VALID);
      if (move === MOVE_VALUE.DOWN) this.addDown(MOVE_VALUE.VALID);
      return true;
    }
  }

  /**
   * 다리의 위쪽, 아래쪽 상태를 반환한다.
   * @return {string[][]} 현재 위쪽, 아래쪽 다리 상태를 나태내는 배열
   */
  getUpDownStatus() {
    return [this.#up, this.#down];
  }

  /**
   * 지도에 그려질 위쪽 방향의 목록에 이동 성공실패 여부를 더한다.
   * @param {string} move 이동한 칸의 이동 성공실패 여부
   */
  addUp(move) {
    this.#up.push(move);
    this.#down.push(" ");
  }

  /**
   * 지도에 그려질 아래쪽 방향의 목록에 이동 성공실패 여부를 더한다.
   * @param {string} move 이동한 칸의 이동 성공실패 여부
   */
  addDown(move) {
    this.#down.push(move);
    this.#up.push(" ");
  }

  /**
   * 총 게임 시도 횟수를 반환한다.
   * @return {number} 총 게임 시도 횟수
   */
  getTotalTry() {
    return this.#totalTry;
  }

  /**
   * 다리의 끝 지점에 도착했는지 리여부를 반환한다.
   * @return {boolean} 다리의 끝에 도착했는지 여부
   */
  isArriveToEnd() {
    return this.#bridge.getLength() === this.#round + 1;
  }

  /**
   * 사용자가 게임을 다시 시도한다.
   */
  retry() {
    this.#round = -1;
    this.#up = [];
    this.#down = [];
    this.#totalTry += 1;
  }

  /**
   * 사용자가 게임을 종료한다.
   */
  quit() {
    quitGame();
  }
}

module.exports = BridgeGame;
