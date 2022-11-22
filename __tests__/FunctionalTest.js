const BridgeGame = require("../src/BridgeGame");
const BridgeMaker = require("../src/BridgeMaker");
const {
  DOWN_BRIDGE_SYMBOL,
  UP_BRIDGE_SYMBOL,
  MOVE_SUCCESS,
  MOVE_FAIL,
  MOVE_END,
} = require("../src/Constant");

describe("입력받은 길이만큼 랜덤으로 구성된 다리를 만듭니다", () => {
  test("주어진 입력값 길이 만큼 랜덤으로 구성된 다리가 만들어 지는지", () => {
    const randomNumbers = ["1", "0", "0"];
    const mockGenerator = randomNumbers.reduce((acc, number) => {
      return acc.mockReturnValueOnce(number);
    }, jest.fn());

    const bridge = BridgeMaker.makeBridge(3, mockGenerator);
    expect(bridge).toEqual([UP_BRIDGE_SYMBOL, DOWN_BRIDGE_SYMBOL, DOWN_BRIDGE_SYMBOL]);
  });
});

describe("해당 이동칸이 이동가능한지 불가능한지 이동이 완료되었는지를 판단합니다", () => {
  const gameManager = new BridgeGame();
  gameManager.setBridge([UP_BRIDGE_SYMBOL, DOWN_BRIDGE_SYMBOL, UP_BRIDGE_SYMBOL]);
  test("일치하는 경우", () => {
    const moveResult = gameManager.move(UP_BRIDGE_SYMBOL);
    expect(moveResult).toEqual(MOVE_SUCCESS);
  });
  test("불일치하는 경우", () => {
    const moveResult = gameManager.move(UP_BRIDGE_SYMBOL);
    expect(moveResult).toEqual(MOVE_FAIL);
  });
  test("완료된경우", () => {
    const moveResult = gameManager.move(UP_BRIDGE_SYMBOL);
    expect(moveResult).toEqual(MOVE_END);
  });
});

describe("게임 재시도시 기존 다리정보를 유지하면서, 횟수만 1회 증가시킵니다. ", () => {
  test("일치하는 경우", () => {
    const gameManager = new BridgeGame();
    gameManager.setBridge([UP_BRIDGE_SYMBOL, DOWN_BRIDGE_SYMBOL, UP_BRIDGE_SYMBOL]);
    gameManager.move(DOWN_BRIDGE_SYMBOL);
    gameManager.retry();
    expect(gameManager.getTrial()).toEqual(2);
    expect(gameManager.getBridge()).toEqual([UP_BRIDGE_SYMBOL, DOWN_BRIDGE_SYMBOL, UP_BRIDGE_SYMBOL]);
  });
});
