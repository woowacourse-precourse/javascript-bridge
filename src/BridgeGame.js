const Controller = require("./BridgeGameContoller");
const Const = require('./constant/constant');

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridge; // 건너야 할 다리
  #current; // 현재까지 사용자가 건넌 다리 갯수
  #controller;

  constructor() {
    this.#controller = new Controller();
    this.#controller.init();
    this.#bridge = this.#controller.getGame(Const.KEY.BRIDGE);
    this.#current = this.#controller.getGame(Const.KEY.CURRENT);
  }

  start(){
    while(this.#bridge.length >= this.#controller.getGame(Const.KEY.CURRENT)){
      if(this.#bridge.length === this.#controller.getGame(Const.KEY.CURRENT)){
        if(this.#controller.getSuccess()) break;
        if(this.retry() === "Q") break;
        this.reset();
      }
      this.move();
    }
    this.end();
  }

  end(){
    this.#controller.end();
  }

  reset(){
    this.#controller.resetGame();
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move() {
    this.#controller.move();
  }


  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
      return this.#controller.retry();
  }
}

module.exports = BridgeGame;
