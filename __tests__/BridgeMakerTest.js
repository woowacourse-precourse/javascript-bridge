const BridgeRandomNumberGenerator = require("../src/BridgeRandomNumberGenerator");
const BridgeMaker = require("../src/BridgeMaker");

const testFunc = BridgeRandomNumberGenerator.generate;
jest.mock("../src/BridgeRandomNumberGenerator");

const mocks = (arr) => {
  arr.forEach((currentTest) => {
    testFunc.mockReturnValueOnce(currentTest);
  });
};

describe("랜덤 값이 결정되면 올바른 다리 데이터를 반환한다.", () => {
  test("다리 길이 4", () => {
    mocks(["1", "0", "0", "1"]);
    const testResult = BridgeMaker.makeBridge(4, testFunc);
    expect(testResult).toEqual(["U", "D", "D", "U"]);
  });

  test("다리 길이 3", () => {
    mocks(["1", "0", "1"]);
    const testResult = BridgeMaker.makeBridge(3, testFunc);
    expect(testResult).toEqual(["U", "D", "U"]);
  });

  test("다리 길이 10", () => {
    mocks(["0", "0", "1", "0", "0", "1", "1", "1", "0", "1"]);
    const testResult = BridgeMaker.makeBridge(10, testFunc);
    expect(testResult).toEqual([
      "D",
      "D",
      "U",
      "D",
      "D",
      "U",
      "U",
      "U",
      "D",
      "U",
    ]);
  });
});
