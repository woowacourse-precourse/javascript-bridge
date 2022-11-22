const BridgeGameService = require("../src/service/BridgeGameService.js");
const OutputView = require("../src/view/OutputView.js");
const InputView = require("../src/view/InputView.js");
const BridgeGameModel = require("../src/model/BridgeGameModel.js");
const BridgeMaker = require("../src/BridgeMaker.js");
const Misc = require("../src/utils/Misc.js");
const { mockQuestions } = require("./ApplicationTest");

const generateSpyFn = (obj, callback, ...methods) => {
  methods.forEach((method) =>
    jest.spyOn(obj, method).mockImplementation(callback)
  );
};

const mockInputView = () => {
  const mock = InputView;
  const callback = (callback) => callback();
  generateSpyFn(
    mock,
    callback,
    "readBridgeSize",
    "readMoving",
    "readGameCommand"
  );
  return mock;
};

const mockOutView = () => {
  const mock = OutputView;
  const callback = (method) => console.log(method);
  generateSpyFn(mock, callback, "printStart", "printResult", "printMap");
  return mock;
};

const mockBridgeGameModel = () => {
  const mock = new BridgeGameModel();
  const callback = (method) => console.log(method);
  generateSpyFn(
    mock,
    callback,
    "start",
    "retry",
    "update",
    "read",
    "result",
    "checkBridge",
    "checkDirection",
    "checkRetry",
    "isPass",
    "isSuccess",
    "isRetry"
  );
  return mock;
};

const mockMakeBridge = () => {
  BridgeMaker.makeBridge = jest.fn().mockImplementation(() => ["U", "U", "D"]);
};

const mockPipe = () => {
  Misc.pipe = jest.fn().mockImplementation((initialValue) => {
    return function (...funcs) {
      return funcs.reduce((res, func) => {
        return res ? func(res) : func();
      }, initialValue);
    };
  });
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
    expect(bridgeGameModel.start).toHaveBeenCalledTimes(1);
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
    expect(bridgeGameModel.retry).toHaveBeenCalledTimes(1);
    expect(task).toHaveBeenCalledTimes(1);
  });

  test("moveGame 로직 테스트", () => {
    const bridgeGameService = new BridgeGameService(
      inputView,
      outputView,
      bridgeGameModel
    );
    const task = jest
      .fn()
      .mockImplementation(() => console.log("processMoveTask"));

    mockQuestions(["U"]);
    mockPipe();

    bridgeGameService.moveGame(task);

    expect(bridgeGameModel.update).toHaveBeenCalledTimes(1);
    expect(outputView.printMap).toHaveBeenCalledTimes(1);
    expect(task).toHaveBeenCalledTimes(1);
  });

  test("endGame 로직 테스트", () => {
    const bridgeGameService = new BridgeGameService(
      inputView,
      outputView,
      bridgeGameModel
    );

    mockPipe();

    bridgeGameService.endGame();

    expect(bridgeGameModel.result).toHaveBeenCalledTimes(1);
    expect(outputView.printResult).toHaveBeenCalledTimes(1);
  });
});

exports.generateSpyFn = generateSpyFn;
