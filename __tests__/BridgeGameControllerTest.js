const BridgeGameController = require("../src/controller/BridgeGame.js");
const BridgeGameService = require("../src/service/BridgeGameService.js");
const { generateSpyFn } = require("./BridgeGameServiceTest.js");

const mockBridgeGameService = () => {
  const mock = new BridgeGameService();
  const callback = () => console.log("service");
  generateSpyFn(
    mock,
    callback,
    "endGame",
    "startGame",
    "retryGame",
    "moveGame",
    "processMove",
    "processRetry"
  );
  return mock;
};

describe("BridgeGameController 클래스 테스트", () => {
  let bridgeGameService;

  beforeEach(() => {
    bridgeGameService = mockBridgeGameService();
  });

  test("move 메서드 호출 테스트", () => {
    const bridgeGameController = new BridgeGameController(bridgeGameService);

    bridgeGameController.move();

    expect(bridgeGameService.moveGame).toHaveBeenCalledTimes(1);
  });

  test("retry 메서드 호출 테스트", () => {
    const bridgeGameController = new BridgeGameController(bridgeGameService);

    bridgeGameController.retry();

    expect(bridgeGameService.retryGame).toHaveBeenCalledTimes(1);
  });

  test("start 메서드 호출 테스트", () => {
    const bridgeGameController = new BridgeGameController(bridgeGameService);

    bridgeGameController.start();

    expect(bridgeGameService.startGame).toHaveBeenCalledTimes(1);
  });

  test("end 메서드 호출 테스트", () => {
    const bridgeGameController = new BridgeGameController(bridgeGameService);

    bridgeGameController.end();

    expect(bridgeGameService.endGame).toHaveBeenCalledTimes(1);
  });
});
