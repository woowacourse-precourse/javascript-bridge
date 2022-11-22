const BridgeGame = require("../src/BridgeGame");
const BridgeMaker = require("../src/BridgeMaker");
const {
  MOVE_SUCCESS,
  MOVE_FAIL,
  MOVE_END,
} = require("./Constant");

describe("입력받은 길이만큼 랜덤으로 구성된 다리를 만듭니다", () => {
  test("주어진 입력값 길이 만큼 랜덤으로 구성된 다리가 만들어 지는지", () => {
    const randomNumbers = ["1", "0", "0"];
    const mockGenerator = randomNumbers.reduce((acc, number) => {
      return acc.mockReturnValueOnce(number);
    }, jest.fn());

    const bridge = BridgeMaker.makeBridge(3, mockGenerator);
    expect(bridge).toEqual(["U", "D", "D"]);
  });
});

describe("해당 이동칸이 이동가능한지 불가능한지 이동이 완료되었는지를 판단합니다", () => {
  const gameManager = new BridgeGame();
  gameManager.setBridge(["U", "D", "U"]);
  test("일치하는 경우", () => {
    const moveResult = gameManager.move("U");
    expect(moveResult).toEqual(MOVE_SUCCESS);
  });
  test("불일치하는 경우", () => {
    const moveResult = gameManager.move("U");
    expect(moveResult).toEqual(MOVE_FAIL);
  });
  test("완료된경우", () => {
    const moveResult = gameManager.move("U");
    expect(moveResult).toEqual(MOVE_END);
  });
});
