const Bridge = require("../src/model/Bridge");
const App = require("../src/App");
const MissionUtils = require("@woowacourse/mission-utils");
const BridgeGame = require("../src/model/BridgeGame");

/**
 *
 * @param {string[]} array
 * @returns bridge
 */
const initialBridge = (array) => {
  const bridge = new Bridge(new BridgeGame());
  bridge.setOriginalBridge(array);

  return bridge;
};

const getBridges = (bridge) => {
  return bridge.getBridges();
};
const basic = ["U", "U", "U"];

describe("브릿지 클래스 테스트", () => {
  test("브릿지는 배열을 입력받아 브릿지를 생성합니다.", () => {
    const bridge = initialBridge(basic);

    const origin = bridge.getOriginalBridge();
    expect(origin instanceof Array).toBe(true);
    expect(origin.length).toBe(3);
    expect(origin.length).not.toBe(4);
  });

  test("브릿지 방향입력은 오리지날 브릿지와 비교합니다.", () => {
    const bridge = initialBridge(basic);
    bridge.moveUpside("U", "0");
    const [up, down] = getBridges(bridge);

    expect(up[0]).toBe(" O ");
    expect(down[0]).toBe(" N ");
  });

  test("브릿지 초기화 는 오리지날브릿지를 건들지 않고 게임 진행상황을 초기화 시킵니다.", () => {
    const bridge = initialBridge(basic);
    bridge.moveUpside("U", "0");
    bridge.setAllBridgeEmpty();

    const [up, down] = getBridges(bridge);
    const origin = bridge.getOriginalBridge();

    expect(origin.length).toBe(3);
    expect(up.length).toBe(0);
  });

  test("이동이 불가능하면 X를 포함합니다.", () => {
    const bridge = initialBridge(basic);
    bridge.moveUpside("D", "0");

    expect(bridge.haveXValue()).toBe(true);
  });

  test("이동이 완료 되면 게임이 정상적으로 끝납니다.", () => {
    const bridge = initialBridge(basic);
    bridge.moveUpside("U", "0");
    bridge.moveUpside("U", "1");
    bridge.moveUpside("U", "2");

    expect(bridge.isGameEnd()).toBe(true);
  });
});
