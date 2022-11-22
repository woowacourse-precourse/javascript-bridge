const { COMMAND_VALUE } = require("./constants/Constant");

/**
 * 다리 건너기 게임을 관리하는 클래스
 * 필드(인스턴스 변수)를 추가할 수 있음
 * 파일경로 변경가능
 * 인자는 필요에따라 추가/변경할 수 있음
 * 메소드 추가/변경할 수 있음
 * inputView, OutputView 사용금지 ! ! ! !
 */
class BridgeGame {
  constructor(userMoveArray, gameTryCount) {
    this.userMoveArray = userMoveArray;
    this.gameTryCount = gameTryCount;
  }

  getCount(gameTryCount) {
    this.gameTryCount = gameTryCount;
    return this.gameTryCount;
  }

  plusCount() {
    this.gameTryCount += 1;
    return this.gameTryCount;
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(moveKey, userMoveArray) {
    if (moveKey === COMMAND_VALUE.UP) {
      userMoveArray.push(1);
    } else if (moveKey === COMMAND_VALUE.DOWN) {
      userMoveArray.push(0);
    }
    this.userMoveArray = userMoveArray;
    return userMoveArray;
  }

  /**
   * 생성된 값과 사용자 입력값 비교
   */
  compareMove(bridge, userMoveArray) {
    this.userMoveArray = userMoveArray;
    for (let i = this.userMoveArray.length - 1; i < bridge.length; i++) {
      if (bridge[i] === this.userMoveArray[i]) {
        if (bridge.length === this.userMoveArray.length) {
          return "allRight";
        }
        return "right";
      }
      return "wrong";
    }
  }

  getMap(userMoveArray) {
    this.userMoveArray = userMoveArray;
    return this.userMoveArray;
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry(retryOrCloseKey) {
    if (retryOrCloseKey === COMMAND_VALUE.RETRY) {
      return 1;
    } else if (retryOrCloseKey === COMMAND_VALUE.QUIT) {
      return 0;
    }
  }
}

module.exports = BridgeGame;
