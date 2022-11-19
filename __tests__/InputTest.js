const MissionUtils = require("@woowacourse/mission-utils");
const App = require("../src/Controller/App");
const BridgeMaker = require("../src/Model/BridgeMaker");
const { ERROR } = require("../src/Constants");

const mockQuestions = (answers) => {
  MissionUtils.Console.readLine = jest.fn();
  answers.reduce((acc, input) => {
    return acc.mockImplementationOnce((_, callback) => {
      callback(input);
    });
  }, MissionUtils.Console.readLine);
};

describe("[예외 테스트]", () => {
  test("다리 길이의 범위를 3 미만으로 입력한 경우", () => {
    mockQuestions(["1"]);
    expect(() => {
      const app = new App();
      app.requestBridgeSize();
    }).toThrow(ERROR.BRIDGE_SIZE);
  });

  test("다리 길이의 범위를 21 이상으로 입력한 경우", () => {
    mockQuestions(["30"]);
    expect(() => {
      const app = new App();
      app.requestBridgeSize();
    }).toThrow(ERROR.BRIDGE_SIZE);
  });
});
