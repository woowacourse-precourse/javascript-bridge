const ERROR_MESSAGE = require("../src/constants/ErrorMessage");
const Bridge = require("../src/model/Bridge");

describe("Bridge 클래스 테스트", () => {
  test("이동할 수 있는 칸을 선택한 경우 true를 반환한다.", () => {
    const bridge = new Bridge(['U','D','D']);
    const result = bridge.matchMoveBridge('U',0);

    expect(result).toEqual(true);
  });
  
  test("다리 끝까지 도달 했을때 true를 반환한다.", () => {
    const bridge = new Bridge(['U','D','D']);
    const result = bridge.isReach(2);

    expect(result).toEqual(true);
  });

  test("다리 길이는 3~20 사이여야 한다.", () => {
    expect(() => { new Bridge(['U','D']) }).toThrow(ERROR_MESSAGE.BRIDGE_LENGTH);
  })
});