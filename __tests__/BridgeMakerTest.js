const BridgeMaker = require("../src/BridgeMaker");
const BridgeRandomNumberGenerator = require("../src/utils/BridgeRandomNumberGenerator");

mockGenerator = (numberList) => {
  BridgeRandomNumberGenerator.generate = jest.fn();
  numberList.forEach((num) => BridgeRandomNumberGenerator.generate.mockReturnValueOnce(num));
};

describe("BridgeMaker 길이 관련 테스트", () => {
  BridgeRandomNumberGenerator.generate = jest.fn();
  const size = 20;

  test("입력된 다리 길이만큼 size만큼 generate 메서드를 부름", () => {
    BridgeMaker.makeBridge(size, BridgeRandomNumberGenerator.generate);

    expect(BridgeRandomNumberGenerator.generate).toBeCalledTimes(20);
  });

  test("생성된 다리 길이가 입력된 size와 일치", () => {
    const bridge = BridgeMaker.makeBridge(size, BridgeRandomNumberGenerator.generate);

    expect(bridge.length).toBe(size);
  });
});

describe("무작위값 매칭 테스트", () => {
  test("무작위 값이 0인 경우 아래 칸, 1인 경우 위 칸이 건널 수 있는 칸이 됨", () => {
    const size = 7;

    mockGenerator([1, 1, 1, 1, 0, 0, 1]);
    const bridge = BridgeMaker.makeBridge(size, BridgeRandomNumberGenerator.generate);

    expect(bridge).toEqual(["U", "U", "U", "U", "D", "D", "U"]);
  });
});
