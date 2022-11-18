const BridgeMaker = require("../src/BridgeMaker");

const getMockGenerator = (randomNumbers) => {
  return randomNumbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, jest.fn());
};

describe("다리 생성 테스트", () => {
  test("다리 랜덤 값이 문자열 타입 일 때 생성 테스트", () => {
    const randomNumbers = ["1", "0", "0"];
    const mockGenerator = getMockGenerator(randomNumbers);

    const bridge = BridgeMaker.makeBridge(3, mockGenerator);
    expect(bridge).toEqual(["U", "D", "D"]);
  });

  test("다리 랜덤 값이 숫자 타입 일 때 생성 테스트", () => {
    const randomNumbers = [0, 1, 0];
    const mockGenerator = getMockGenerator(randomNumbers);

    const bridge = BridgeMaker.makeBridge(3, mockGenerator);
    expect(bridge).toEqual(["D", "U", "D"]);
  });
});
