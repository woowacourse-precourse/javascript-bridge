const BridgeResult = require("../src/model/BridgeResult");

describe("Result", () => {
  test("인자로 받은 bridge, index, isPossibleMove를 통해 결과를 출력 1", () => {
    const mockBridge = ["U", "D", "D"];

    expect(new BridgeResult(mockBridge, 0, true).result).toBe("[ O ]\n[   ]");
    expect(new BridgeResult(mockBridge, 1, true).result).toBe(
      "[ O |   ]\n[   | O ]"
    );
    expect(new BridgeResult(mockBridge, 2, false).result).toBe(
      "[ O |   | X ]\n[   | O |   ]"
    );
  });

  test("인자로 받은 bridge, index, isPossibleMove를 통해 결과를 출력 2", () => {
    const mockBridge = ["D", "D", "D"];

    expect(new BridgeResult(mockBridge, 0, false).result).toBe("[ X ]\n[   ]");
  });

  test("인자로 받은 bridge, index, isPossibleMove를 통해 결과를 출력 3", () => {
    const mockBridge = ["U", "D", "D"];

    expect(new BridgeResult(mockBridge, 0, true).result).toBe("[ O ]\n[   ]");
    expect(new BridgeResult(mockBridge, 1, true).result).toBe(
      "[ O |   ]\n[   | O ]"
    );
    expect(new BridgeResult(mockBridge, 2, true).result).toBe(
      "[ O |   |   ]\n[   | O | O ]"
    );
  });
});
