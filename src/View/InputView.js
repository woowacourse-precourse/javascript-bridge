const { Console } = require("@woowacourse/mission-utils");
const { ASKS } = require("../Constants/Message");

/**
 * 객체
 * 사용자로부터 입력을 받는 역할을 한다. : Console.readLine() -> 이 클래스에서만 사용 가능
 * 변경 가능 : 파일경로, 메서드 인자, 메서드 (추가, 변경)
 * 목적 : "입력만 받는" 것 -> UI 로직
 */

const InputView = {
  readBridgeSize(createBridgeController) {
    Console.readLine(ASKS.BRIDGE_SIZE, (sizeInput) => {
      createBridgeController(sizeInput);
    });
  },

  readMoving(moveController) {
    Console.readLine(ASKS.PLAYER_MOVING, (moveInput) => {
      moveController(moveInput);
    });
  },

  readGameCommand(commandController) {
    Console.readLine(ASKS.PLAYER_COMAND, (commandInput) => {
      commandController(commandInput);
    });
  },
};

module.exports = InputView;
