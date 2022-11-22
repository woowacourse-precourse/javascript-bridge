const BridgeGame = require("../src/BridgeGame");
const OutputView = require("../src/OutputView");

describe("종료 테스트", () => {
  const bridgeGame = new BridgeGame(["U", "D", "U"]);
  bridgeGame.move("D");

  test("종료 실행 테스트", () => {
    const printMapSpy = jest.spyOn(OutputView, "printMap");

    printMapSpy.mockClear();

    bridgeGame.quit();

    expect(printMapSpy).toHaveBeenCalledTimes(1);
  });
});