const { Console } = require("@woowacourse/mission-utils");
const App = require("../src/App");
const BridgeMaker = require("../src/BridgeMaker");
const OutputView = require("../src/OutputView");

const mockReadLine = (inputs) => {
  Console.readLine = jest.fn();
  inputs.reduce((acc, input) => {
    return acc.mockImplementationOnce((_, callback) => {
      callback(input);
    });
  }, Console.readLine);
};

const logSpy = jest.spyOn(Console, "print");

describe("App 클래스 테스트", () => {
  let app;
  BridgeMaker.makeBridge = jest.fn().mockReturnValue(["U", "D", "D"]);

  beforeEach(() => {
    app = new App();
    logSpy.mockClear();
    OutputView.retry();
  });

  test("case1", () => {
    mockReadLine(["3", "U", "d", "D", "U", "Q"]);
    app.play();

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("게임 성공 여부: 실패"));
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("총 시도한 횟수: 1"));
  });

  test("case2", () => {
    mockReadLine(["3", "U", "D", "U", "r", "R", "U", "D", "D"]);
    app.play();

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("게임 성공 여부: 성공"));
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("총 시도한 횟수: 2"));
  });
});
