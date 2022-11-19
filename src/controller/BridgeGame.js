/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {

  constructor(view, model) {
    this.view = view
    this.model = model
  }
  /**
   * 사용자가 게임을 처음 시작할 때 사용하는 메소드
   */
  start() {
    const printLength = (length) => {
      this.model.buildBridge(length);
      this.move();
    }
    this.view.getBridgeLength(printLength);
  }
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   */
  move() {
    const updateMove = (direction) => {
      const [isRight, isDone] = this.model.stepForward(direction);
      console.log(isRight, isDone);
    }
    this.view.getWhereToGo(updateMove);
  }
  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   */
  retry() {}

}

module.exports = BridgeGame;
