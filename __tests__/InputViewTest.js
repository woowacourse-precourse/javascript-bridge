const InputView = require("../src/InputView");
const BridgeRandomNumberGenerator = require("../src/BridgeRandomNumberGenerator");
const MissionUtils = require("@woowacourse/mission-utils");

const mockQuestions = (answer) => {
  MissionUtils.Console.readLine = jest.fn();
  MissionUtils.Console.readLine.mockImplementationOnce((_, callback) => {
    callback(answer);
  });
};

describe("readBridgeSize 테스트", () => {
  test("입력 예외 테스트: 범위를 넘는 수를 입력했을 때", () => {
    mockQuestions(1);
    expect(() => {
      InputView.readBridgeSize();
    }).toThrow("[ERROR]");
  });

  test("입력 예외 테스트: 숫자가 아닌 문자를 입력했을 때", () => {
    mockQuestions("a");
    expect(() => {
      InputView.readBridgeSize();
    }).toThrow("[ERROR]");
  });

  test("입력 예외 테스트: 실수를 입력했을 때", () => {
    mockQuestions(6.6);
    expect(() => {
      InputView.readBridgeSize();
    }).toThrow("[ERROR]");
  });
});
