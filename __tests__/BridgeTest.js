const Bridge = require("../src/model/Bridge");

describe("Bridge 클래스 테스트", () => {
  test("이동할 수 있는 칸을 선택한 경우 true를 반환한다.", () => {
    const bridge = new Bridge(['U','D','D']);
    const result = bridge.matchMoveBridge('U',0);

    expect(result).toEqual(true);
  });

});