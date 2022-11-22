const BridgeMaker = require("../src/BridgeMaker");

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
