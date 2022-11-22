const BridgeSet = require("../src/BridgeSet");
const { SPACE_TO_MOVE } = require("../src/Utils");

describe("다리의 진행상황을 만드는 메서드 테스트", () => {
  test("값의 저장이 처음일 때 윗칸으로 이동이 성공했을 경우의 진행상황을 만든다.", () => {
    const moving = SPACE_TO_MOVE.MOVE_UP;
    const overBridge = [];
    const underBridge = [];

    BridgeSet.bridgePass(moving, overBridge, underBridge);
    expect(overBridge.join("")).toBe(" O ");
    expect(underBridge.join("")).toBe("   ");
  });

  test("값이 이미 있을 때 윗칸으로 이동이 성공했을 경우의 진행상황을 만든다.", () => {
    const moving = SPACE_TO_MOVE.MOVE_UP;
    const overBridge = [" O "];
    const underBridge = ["   "];

    BridgeSet.bridgePass(moving, overBridge, underBridge);
    expect(overBridge.join("")).toBe(" O | O ");
    expect(underBridge.join("")).toBe("   |   ");
  });

  test("값의 저장이 처음일 때 아랫칸으로 이동이 성공했을 경우의 진행상황을 만든다.", () => {
    const moving = SPACE_TO_MOVE.MOVE_DOWN;
    const overBridge = [];
    const underBridge = [];

    BridgeSet.bridgePass(moving, overBridge, underBridge);
    expect(overBridge.join("")).toBe("   ");
    expect(underBridge.join("")).toBe(" O ");
  });

  test("값의 저장이 처음일 때 아랫칸으로 이동이 성공했을 경우의 진행상황을 만든다.", () => {
    const moving = SPACE_TO_MOVE.MOVE_DOWN;
    const overBridge = [" O "];
    const underBridge = ["   "];

    BridgeSet.bridgePass(moving, overBridge, underBridge);
    expect(overBridge.join("")).toBe(" O |   ");
    expect(underBridge.join("")).toBe("   | O ");
  });

  test("값의 저장이 처음일 때 윗칸으로 이동이 실패했을 경우의 진행상황을 만든다.", () => {
    const moving = SPACE_TO_MOVE.MOVE_UP;
    const overBridge = [];
    const underBridge = [];

    BridgeSet.bridgeFail(moving, overBridge, underBridge);
    expect(overBridge.join("")).toBe(" X ");
    expect(underBridge.join("")).toBe("   ");
  });

  test("값이 이미 있을 때 윗칸으로 이동이 실패했을 경우의 진행상황을 만든다.", () => {
    const moving = SPACE_TO_MOVE.MOVE_UP;
    const overBridge = [" X "];
    const underBridge = ["   "];

    BridgeSet.bridgeFail(moving, overBridge, underBridge);
    expect(overBridge.join("")).toBe(" X | X ");
    expect(underBridge.join("")).toBe("   |   ");
  });

  test("값의 저장이 처음일 때 아랫칸으로 이동이 실패했을 경우의 진행상황을 만든다.", () => {
    const moving = SPACE_TO_MOVE.MOVE_DOWN;
    const overBridge = [];
    const underBridge = [];

    BridgeSet.bridgeFail(moving, overBridge, underBridge);
    expect(overBridge.join("")).toBe("   ");
    expect(underBridge.join("")).toBe(" X ");
  });

  test("값의 저장이 처음일 때 아랫칸으로 이동이 실패했을 경우의 진행상황을 만든다.", () => {
    const moving = SPACE_TO_MOVE.MOVE_DOWN;
    const overBridge = ["   "];
    const underBridge = [" X "];

    BridgeSet.bridgeFail(moving, overBridge, underBridge);
    expect(overBridge.join("")).toBe("   |   ");
    expect(underBridge.join("")).toBe(" X | X ");
  });
});