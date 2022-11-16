const MissionUtils = require("@woowacourse/mission-utils");
const BridgeMaker = require("../src/BridgeMaker");
const InputView = require('../src/InputView');
const App = require('../src/App')

const mockQuestions = (answers) => {
  MissionUtils.Console.readLine = jest.fn();
  answers.reduce((acc, input) => {
    return acc.mockImplementationOnce((_, callback) => {
      callback(input);
    });
  }, MissionUtils.Console.readLine);
};

describe("다리 건너기 테스트", () => {
  test("다리 생성 테스트", () => {
    const randoms = ["1", "1", "0"];
    const mockGenerator = randoms.reduce(
      (acc, number) => acc.mockReturnValueOnce(number),
      jest.fn()
    );

    const bridge = BridgeMaker.makeBridge(3, mockGenerator);
    expect(bridge).toEqual(["U", "U", "D"]);
  });

  test.each(["g",2])("다리 길이에 문자나 범위 외 숫자는 입력할 수 없다", (input) => {
    InputView.readBridgeSize = jest
      .fn()
      .mockImplementationOnce((callback) => callback(input));

    const app = new App();

    expect(() => {
      app.setBridgeSize();
    }).toThrow("[ERROR]");
  });
});