const OutputView = require("./OutputView");
const InputView = require("./InputView");
const { Console } = require("@woowacourse/mission-utils");
const { MESSAGE } = require("./constants/Constant");
const Validate = require("./Validate");

// const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
// const number = BridgeRandomNumberGenerator.generate();
// console.log(number);

/**
 * 다리 건너기 게임을 관리하는 클래스
 * 필드(인스턴스 변수)를 추가할 수 있음
 * 파일경로 변경가능
 * 인자는 필요에따라 추가/변경할 수 있음
 * 메소드 추가/변경할 수 있음
 */
class BridgeGame {
  start() {
    console.log("start");
    // Console.readLine(MESSAGE.INPUT_BRIDGE_LENGTH, (inputBridgeSize) => {
    //   Validate.isNumber(inputBridgeSize);
    //   Validate.checkLength(inputBridgeSize);
    //   this.bridgeSize = inputBridgeSize;
    //   this.move();
    // });
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move() {
    Console.readLine(MESSAGE.CHOOSE_MOVE_SPACE, (userInput) => {
      Validate.checkMovingKey(userInput);
      console.log(MESSAGE.CHOOSE_MOVE_SPACE);
    });
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {}
}

module.exports = BridgeGame;
