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

  test("단일 움직임 성공 유무 테스트", () => {
    bridgeController.setBridge(["U", "D", "D"]);

    expect(bridgeController.getIsSuccessMoving(["U"])).toEqual(true);
    expect(bridgeController.getIsSuccessMoving(["U", "D"])).toEqual(true);
    expect(bridgeController.getIsSuccessMoving(["U", "D", "U"])).toEqual(false);
  });

  test("추가 움직임 가능 유무 테스트", () => {
    bridgeController.setBridge(["U", "D", "D"]);

    expect(bridgeController.getIsFinished(["U"])).toEqual(false);
    expect(bridgeController.getIsFinished(["U", "D"])).toEqual(false);
    expect(bridgeController.getIsFinished(["U", "D", "U"])).toEqual(true);
  });

  test("다리별 움직임 성공여부 테스트", () => {
    bridgeController.setBridge(["U", "D", "D"]);

    expect(bridgeController.getMovingStatus(["U"])).toEqual({
      up: ["O"],
      down: [" "],
    });
    expect(bridgeController.getMovingStatus(["U", "D"])).toEqual({
      up: ["O", " "],
      down: [" ", "O"],
    });
    expect(bridgeController.getMovingStatus(["U", "D", "U"])).toEqual({
      up: ["O", " ", "X"],
      down: [" ", "O", " "],
    });
  });
});
