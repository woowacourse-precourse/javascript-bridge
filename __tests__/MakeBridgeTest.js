const BridgeMaker = require("../src/BridgeMaker");

describe("다리 생성 테스트", () => {
  test("길이 3인 다리 생성 테스트", () => {
    const randomNumbers = [0, 0, 0];
    const mockGenerator = randomNumbers.reduce((acc, number) => {
      return acc.mockReturnValueOnce(number);
    }, jest.fn());

    const bridge = BridgeMaker.makeBridge(3, mockGenerator);
    expect(bridge).toEqual(["D", "D", "D"]);
  });

  test("길이 8인 다리 생성 테스트", () => {
    const randomNumbers = [0, 1, 1, 0, 1, 0, 0, 1];
    const mockGenerator = randomNumbers.reduce((acc, number) => {
      return acc.mockReturnValueOnce(number);
    }, jest.fn());

    const bridge = BridgeMaker.makeBridge(8, mockGenerator);
    expect(bridge).toEqual(["D", "U", "U", "D", "U", "D", "D", "U"]);
  });

  test("길이 20인 다리 생성 테스트", () => {
    const randomNumbers = [0, 1, 1, 0, 1, 0, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1];
    const mockGenerator = randomNumbers.reduce((acc, number) => {
      return acc.mockReturnValueOnce(number);
    }, jest.fn());

    const bridge = BridgeMaker.makeBridge(20, mockGenerator);
    expect(bridge).toEqual(['D', 'U', 'U', 'D', 'U', 'D', 'U', 'U', 'U', 'D',
                            'D', 'U', 'U', 'D', 'U', 'U', 'U', 'D', 'U', 'U']);
    });
});