const InputView = require("../src/InputView");
const BridgeRandomNumberGenerator = require("../src/BridgeRandomNumberGenerator");
const MissionUtils = require("@woowacourse/mission-utils");
const BridgeGame = require("../src/BridgeGame");

const mockQuestions = (answer) => {
  MissionUtils.Console.readLine = jest.fn();
  MissionUtils.Console.readLine.mockImplementationOnce((_, callback) => {
    callback(answer);
  });
};

describe("readBridgeSize 테스트", () => {
  test("다리길이 입력 예외 테스트: 범위를 넘는 수를 입력했을 때", () => {
    mockQuestions(1);
    expect(() => {
      InputView.readBridgeSize();
    }).toThrow("[ERROR]");
  });

  test("다리길이 입력 예외 테스트: 숫자가 아닌 문자를 입력했을 때", () => {
    mockQuestions("a");
    expect(() => {
      InputView.readBridgeSize();
    }).toThrow("[ERROR]");
  });

  test("다리길이 입력 예외 테스트: 실수를 입력했을 때", () => {
    mockQuestions(6.6);
    expect(() => {
      InputView.readBridgeSize();
    }).toThrow("[ERROR]");
  });

  test("유저 다리 선택 입력 예외 테스트: U와 D를 입력하지 않았을 때", () => {
    mockQuestions("A");
    expect(() => {
      InputView.readMoving(new BridgeGame([1, 1, 1]));
    }).toThrow("[ERROR]");
  });
});
