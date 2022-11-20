const BridgeGameService = require("../src/Service/BridgeGameService.js");
const OutputView = require("../src/View/OutputView.js");
const InputView = require("../src/View/InputView.js");
const BridgeGameModel = require("../src/Model/BridgeGameModel.js");
const BridgeMaker = require("../src/BridgeMaker.js");

const mockInputView = () => {
  const mock = InputView;
  jest
    .spyOn(mock, "readBridgeSize")
    .mockImplementation((callback) => callback());
  jest.spyOn(mock, "readMoving").mockImplementation((callback) => callback());
  jest
    .spyOn(mock, "readGameCommand")
    .mockImplementation((callback) => callback());
  return mock;
};

const mockOutView = () => {
  const mock = OutputView;
  jest
    .spyOn(mock, "printStart")
    .mockImplementation(() => console.log("다리 건너기 게임을 시작합니다."));
  jest
    .spyOn(mock, "printResult")
    .mockImplementation(() => console.log("다리게임 결과"));
  jest
    .spyOn(mock, "printMap")
    .mockImplementation(() => console.log("다리게임"));
  return mock;
};

const mockBridgeGameModel = () => {
  const mock = new BridgeGameModel();
  jest.spyOn(mock, "try").mockImplementation((bridge) => {
    return bridge;
  });
  jest.spyOn(mock, "attempt").mockImplementation((attempt) => {
    return attempt;
  });
  jest.spyOn(mock, "jump").mockImplementation((bridge) => {
    return bridge;
  });
  jest.spyOn(mock, "result").mockImplementation((result) => {
    return result;
  });
  jest.spyOn(mock, "checkBridge").mockImplementation((bridge) => {
    return bridge;
  });
  jest.spyOn(mock, "checkUser").mockImplementation((bridge) => {
    return bridge;
  });
  jest.spyOn(mock, "checkRetry").mockImplementation((retry) => {
    return retry;
  });
  jest.spyOn(mock, "isFail").mockImplementation((attemp) => {
    return attemp;
  });
  jest.spyOn(mock, "isSuccess").mockImplementation((bridge) => {
    return bridge;
  });
  jest.spyOn(mock, "isRetry").mockImplementation((retry) => {
    return retry;
  });
  return mock;
};

const mockMakeBridge = () => {
  BridgeMaker.makeBridge = jest.fn().mockImplementation(() => ["U", "U", "D"]);
};

describe("BridgeGameService 클래스 테스트", () => {
  let inputView;
  let outputView;
  let bridgeGameModel;

  beforeEach(() => {
    inputView = mockInputView();
    outputView = mockOutView();
    bridgeGameModel = mockBridgeGameModel();
  });

  test("startGame 로직 테스트", () => {
    const bridgeGameService = new BridgeGameService(
      inputView,
      outputView,
      bridgeGameModel
    );
    const task = () => console.log("task");

    mockMakeBridge();

    bridgeGameService.startGame(task);

    expect(outputView.printStart).toHaveBeenCalledTimes(1);
    expect(bridgeGameModel.checkBridge).toHaveBeenCalledTimes(1);
    expect(bridgeGameModel.try).toHaveBeenCalledTimes(1);
  });

  test("retryGame 로직 테스트", () => {
    const bridgeGameService = new BridgeGameService(
      inputView,
      outputView,
      bridgeGameModel
    );
    const task = jest
      .fn()
      .mockImplementation(() => console.log("processRetryTask"));

    bridgeGameService.retryGame(task);

    expect(bridgeGameModel.checkRetry).toHaveBeenCalledTimes(1);
    expect(bridgeGameModel.attempt).toHaveBeenCalledTimes(1);
    expect(task).toHaveBeenCalledTimes(1);
  });
});
