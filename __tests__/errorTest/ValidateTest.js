const Validate = require("../../src/utils/Validate");
const Message = require("../../src/constants/Message");

describe("예외 테스트", () => {
  test("다리 사이즈가 숫자가 아닌경우 예외가 발생한다.", () => {
    expect(() => {
      Validate.validateSize("육");
    }).toThrow(Message.ERROR_MESSAGE.BRIDGE_SIZE.NOT_A_NUMBER);
  });

  test("다리 사이즈가 숫자가 3미만 20초과인 경우 예외가 발생한다.", () => {
    expect(() => {
      Validate.validateSize(21);
    }).toThrow(Message.ERROR_MESSAGE.BRIDGE_SIZE.INVALID_RANGE);
  });

  test("입력받은 이동방향이 'U','D'중 하나가 아닌 경우 예외가 발생한다.", () => {
    expect(() => {
      Validate.validateMoving("G");
    }).toThrow(Message.ERROR_MESSAGE.MOVING);
  });

  test("재시도할지 묻는 질문에 입력받은 명령어가 'R','Q'중 하나가 아닌 경우 예외가 발생한다.", () => {
    expect(() => {
      Validate.validateCommand("G");
    }).toThrow(Message.ERROR_MESSAGE.COMMAND);
  });
});
