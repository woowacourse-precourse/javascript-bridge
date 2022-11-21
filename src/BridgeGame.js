const { COMMAND } = require("./Constants");
/**
 * 다리 건너기 게임을 관리하는 클래스
 */
 class BridgeGame {
  constructor(){
    this.userPickedArr = [];
    this.userPickedUpOrDown = [[], []];
    this.attemptCount = 1;
  }
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(createBridge, selectUpOrDown) {
    this.userPickedArr.push(selectUpOrDown);
    const compareLength = this.userPickedArr.length - 1;
    this.moveUpIsCorrect(createBridge[compareLength], this.userPickedArr[compareLength]);
    this.moveDownIsCorrect(createBridge[compareLength], this.userPickedArr[compareLength]);
    this.moveUpIsWrong(createBridge[compareLength], this.userPickedArr[compareLength]);
    this.moveDownIsWrong(createBridge[compareLength], this.userPickedArr[compareLength]);
  }

  moveUpIsCorrect(createBridge, selectUpOrDown){
    if(createBridge == selectUpOrDown && selectUpOrDown == COMMAND.BRIDGE_UP){
      this.userPickedUpOrDown[0].push("O");
      this.userPickedUpOrDown[1].push(" ");
    }
  }

  moveDownIsCorrect(createBridge, selectUpOrDown){
    if(createBridge == selectUpOrDown && selectUpOrDown == COMMAND.BRIDGE_DOWN){
      this.userPickedUpOrDown[0].push(" ");
      this.userPickedUpOrDown[1].push("O")
    }
  }
  moveUpIsWrong(createBridge, selectUpOrDown){
    if(createBridge !== selectUpOrDown && selectUpOrDown == COMMAND.BRIDGE_UP){
      this.userPickedUpOrDown[0].push("X");
      this.userPickedUpOrDown[1].push(" ");
    }
  }
  moveDownIsWrong(createBridge, selectUpOrDown){
    if(createBridge !== selectUpOrDown && selectUpOrDown == COMMAND.BRIDGE_DOWN){
      this.userPickedUpOrDown[0].push(" ");
      this.userPickedUpOrDown[1].push("X");
    }  
  }
  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
      this.attemptCount += 1;
      this.userPickedArr.length = 0;
      this.userPickedUpOrDown[0].length = 0;
      this.userPickedUpOrDown[1].length = 0;
    }
  }
module.exports = BridgeGame;