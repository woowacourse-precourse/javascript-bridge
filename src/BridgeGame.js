const input = require('./View/InputView');
const output = require('./View/OutputView');
const Controller = require("./BridgeGameContoller");
const Const = require('./constant/constant');

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridge; // 건너야 할 다리
  #current; // 현재까지 사용자가 건넌 다리 갯수
  #totalTry; // 총 게임 시도 횟수
  #lastInput; // 마지막 입
  #gameResult; // 게임 결과 ( true or false )
  #controller;

  constructor() {
    this.#controller = new Controller();
    this.#bridge = this.#controller.getGame(Const.KEY.BRIDGE);
    this.#current = this.#controller.getGame(Const.KEY.CURRENT);
    this.#totalTry = 0;
    this.#lastInput = '';
    this.#gameResult = false;
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move() {
    this.#controller.move();
    // try{
    //   this.#controller.move();
    //   // this.#lastInput = input.readMoving();
    //   // output.printMap(this.#bridge, this.#current + 1, this.#lastInput);
    //   // this.#current += 1;
    // }
    // catch(e){
    //   this.move();
    // }
  }


  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
      return this.#controller.retry();
  }

  start(){
    while(this.#controller.getGame(Const.KEY.BRIDGE).length >= this.#controller.getGame(Const.KEY.CURRENT)){
      if(this.#controller.getGame(Const.KEY.BRIDGE).length === this.#controller.getGame(Const.KEY.CURRENT)){
        if(this.#bridge[this.#bridge.length-1] === this.#lastInput) break;
        if(this.retry() === "Q") break;
        this.reset();
      }
      this.move();
    }
    this.end();
  }

  end(){
    this.#totalTry ++;
    this.#controller.end();
  }

  reset(){
    this.#current = 0;
    this.#totalTry ++;
  }
}

module.exports = BridgeGame;
