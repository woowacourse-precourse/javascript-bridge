const Bridge = require("../src/models/Bridge");

const makeInstance = () => {
  return new Bridge(['U', 'D', 'D']);
}

describe("isCurrentDirection 메소드 테스트", () => {
  const bridge = makeInstance();
  test("입력된 값이 현재 방향일 때", () => {
    expect(bridge.isCurrentDirection('D')).toEqual(false);
  });
  test("입력된 값이 현재 방향아닐 때", () => {
    expect(bridge.isCurrentDirection('U')).toEqual(true);
  });
});

describe("isBridgeEnd 메소드 테스트", () => {
  test("다리의 끝이 아닐 때", () => {
    const bridge = makeInstance();
    expect(bridge.isBridgeEnd()).toEqual(false);
  });
  test("다리의 끝이 아닐 때", () => {
    const bridge = makeInstance();
    bridge.move();
    bridge.move();
    expect(bridge.isBridgeEnd()).toEqual(true);
  });
});

describe("move 메소드 테스트", () => {
  test("한 칸 이동 테스트", () => {
    const bridge = makeInstance();
    bridge.move();
    expect(bridge.isCurrentDirection('D')).toEqual(true);
  });
});

describe("initializeCurrentDirection 메소드 테스트", () => {
  test("위치 초기화 테스트", () => {
    const bridge = makeInstance();
    bridge.move();
    bridge.initializeCurrentDirection();
    expect(bridge.isCurrentDirection('U')).toEqual(true);
  });
});
