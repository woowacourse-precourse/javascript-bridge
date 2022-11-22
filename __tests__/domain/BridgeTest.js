const Bridge = require("../../src/domain/Bridge");

describe("Bridge 클래스 테스트", () => {
  test("이동할 수 있는 칸이면 true를 반환한다.",() => {
      const bridge = new Bridge(["U","U","D"]);
      const position = "U";
      const index = 0;

      expect(bridge.canMove(position, index)).toBeTruthy();
    }
  );

  test("이동할 수 있는 칸이면 false를 반환한다",() => {
    const bridge = new Bridge(["U","U","D"]);
    const position = "D";
    const index = 0;

    expect(bridge.canMove(position, index)).toBeFalsy();
   }
  );

  test("다리의 길이를 반환한다.",() => {
    const bridge = new Bridge(["U","D","D","U","D"]);

    expect(bridge.size()).toBe(5);
   }
  );

});
