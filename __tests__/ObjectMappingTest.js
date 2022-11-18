const ObjectMapping = require("../src/ObjectMapping");

describe("Object Mapping Test", () => {
  test("BridgeLineMap에 0을 매핑하면 D값이 반환된다.", () => {
    expect(ObjectMapping.BridgeLineMap[0]).toBe("D");
  });
  test("BridgeLineMap에 1을 매핑하면 U값이 반환된다.", () => {
    expect(ObjectMapping.BridgeLineMap[1]).toBe("U");
  });
  test("BridgeLineMap에 0 또는 1이 아닌 값을 매핑하면 undefined 값이 반환된다.", () => {
    expect(ObjectMapping.BridgeLineMap[2]).toBe(undefined);
  });
});
