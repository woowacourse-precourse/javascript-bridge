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

  restart() {
    console.log('restart');
  }
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   */
  move() {
    const updateMove = (direction) => {
      const [isRight, isDone] = this.model.stepForward(direction);
      this.view.printMap(this.model.map);
      if ( isRight && isDone ) return this.terminate();
      if ( !isRight || isDone ) return this.retry()
      if ( isRight && !isDone ) return this.move();
    }
    this.view.getWhereToGo(updateMove);
  }
  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   */
  retry() {
    const getCommand = (command) => {
      if(command === 'R') return this.restart();
      if(command === 'Q') return this.terminate();
    }
    this.view.getWhatToDo(getCommand)
  }

  terminate() {
    console.log('terminate');
  }

}

module.exports = BridgeGame;
