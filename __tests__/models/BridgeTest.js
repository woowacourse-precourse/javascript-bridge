const { Bridge } = require("../../src/models");

describe("Bridge 클래스 테스트", () => {
  test("다리를 생성할 수 있어야 합니다.", () => {
    // given
    const directions = ["U", "D", "U"];

    // when
    const bridge = new Bridge(directions);

    // then
    expect(bridge).toBeDefined();
  });

  test("다리의 길이가 3보다 작다면 예외를 던져야 한다.", () => {
    // given
    const directionArray = [["U", "D"], []];

    // when
    directionArray.forEach((directions) => {
      const makeBridge = () => new Bridge(directions);

      // then
      expect(makeBridge).toThrow("[ERROR]");
    });
  });

  test("다리의 길이가 20보다 크다면 예외를 던져야 한다.", () => {
    // given
    const directions = new Array(21).fill("U");

    // when
    const makeBridge = () => new Bridge(directions);

    // then
    expect(makeBridge).toThrow("[ERROR]");
  });

  test("다리의 길이를 반환할 수 있어야 한다.", () => {
    // given
    const directions = ["U", "D", "U"];

    // when
    const bridge = new Bridge(directions);
    const bridgeSize = bridge.size();

    // then
    expect(bridgeSize).toBe(3);
  });

  test("이동하려는 칸이 이동 가능한지 확인할 수 있어야 한다.", () => {
    // given
    const directions = ["U", "D", "U"];

    // when
    const bridge = new Bridge(directions);
    const moveState = bridge.isMovable(0, "U");

    // then
    expect(moveState).toBe(true);
  });

  test("이동하려는 칸이 이동 가능하다면 true를 반환한다.", () => {
    // given
    const directions = ["U", "D", "U"];

    // when
    const bridge = new Bridge(directions);
    const moveState = bridge.isMovable(0, "U");

    // then
    expect(moveState).toBe(true);
  });

  test("이동하려는 칸이 불가능 한 칸이라면 false를 반환한다.", () => {
    // given
    const directions = ["U", "D", "U"];

    // when
    const bridge = new Bridge(directions);
    const moveState = bridge.isMovable(2, "D");

    // then
    expect(moveState).toBe(false);
  });
});
