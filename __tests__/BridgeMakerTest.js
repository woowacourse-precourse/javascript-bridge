/* eslint-disable */
const BridgeMaker = require("../src/BridgeMaker");
const BridgeRandomNumberGenerator = require("../src/BridgeRandomNumberGenerator");

describe("BridgeMaker 객체 테스트", () => {
  test.each([[3], [10], [20]])("다리 길이 정상 입력값 테스트", (input) => {
    const arrayLength = BridgeMaker.makeBridge(input, BridgeRandomNumberGenerator.generate).length;
    expect(arrayLength).toEqual(input);
  });
});
