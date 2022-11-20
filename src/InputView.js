/**
 * 객체
 * 사용자로부터 입력을 받는 역할을 한다. : Console.readLine() -> 이 클래스에서만 사용 가능
 * 변경 가능 : 파일경로, 메서드 인자, 메서드
 * 목적 : "입력만 받는" 것 -> UI 로직
 */

const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {},

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {},

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {
    //유효성:
    //R: 재시도의 경우:: 다시 게임시작 로직 띄움 -> BridgeGame: retry
  },
};

module.exports = InputView;
