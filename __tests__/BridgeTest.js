const BridgeController = require("../src/controller/BridgeController");
const { validate } = require("../src/validation/BridgeSizeValidation");

describe("다리 관련 테스트", () => {
  const bridgeController = new BridgeController();

  test("다리 생성 input 테스트", () => {
    expect(() => {
      validate("2");
    }).toThrow("[ERROR]");

    expect(() => {
      validate("");
    }).toThrow("[ERROR]");

    expect(() => {
      validate("우테코");
    }).toThrow("[ERROR]");

    expect(() => {
      validate("?");
    }).toThrow("[ERROR]");

    expect(() => {
      validate("21");
    }).toThrow("[ERROR]");
  });

  test("다리 생성 테스트", () => {
    const createdBridge = bridgeController.getCreatedBridge("3");
    expect(createdBridge.length).toEqual(3);
    for (const singleStep of createdBridge) {
      expect(singleStep === "U" || singleStep === "D").toEqual(true);
    }
  });
});
