const { Console } = require("@woowacourse/mission-utils");
const { MESSAGE } = require("./constants/Constant");
const Validate = require("./Validate");

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
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(moveKey, userMoveArray) {
    if (moveKey === "U") {
      userMoveArray.push(1);
    } else if (moveKey === "D") {
      userMoveArray.push(0);
    }
    this.userMoveArray = userMoveArray;
    return userMoveArray;
  }

  /**
   * 생성된 값과 사용자 입력값 비교
   */
  // compareMove(bridge, userMoveArray) {
  //   this.userMoveArray = userMoveArray;
  //   console.log(this.userMoveArray);
  //   for (let i = 0; i < this.userMoveArray.length; i++) {
  //     if (bridge[i] === this.userMoveArray[i]) {
  //       console.log("같음");
  //       console.log(bridge[i]);
  //       console.log(userMoveArray[i]);

  //       if (bridge.length === this.userMoveArray.length) {
  //         return 0;
  //       }
  //       return 1;
  //     } else {
  //       console.log("다름");

  //       return 2;
  //     }
  //   }
  // }

  compareMove(bridge, userMoveArray) {
    this.userMoveArray = userMoveArray;
    console.log(this.userMoveArray);
    console.log(bridge);

    for (let i = this.userMoveArray.length - 1; i < bridge.length; i++) {
      if (bridge[i] === this.userMoveArray[i]) {
        console.log("같음");
        console.log(bridge[i]);
        console.log(userMoveArray[i]);

        if (bridge.length === this.userMoveArray.length) {
          return 0;
        }
        return 1;
      } else {
        console.log("다름");

        return 2;
      }
    }
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry(retryOrCloseKey) {
    if (retryOrCloseKey === "R") {
      console.log("재시도");
      return 1;
    } else if (retryOrCloseKey === "Q") {
      console.log("종료");
      return 0;
    }
  }
}

module.exports = BridgeGame;
