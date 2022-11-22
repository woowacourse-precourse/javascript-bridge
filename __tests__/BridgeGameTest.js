const BridgeGame = require("../src/BridgeGame");

describe("BridgeGame 로직 테스트", () => {
  test("이동시 값을 리턴해주는지 체크", () => {
    const brideGame = new BridgeGame();
    brideGame.ready(3);
    brideGame.move("U");
    result = brideGame.getUp();

    expect(result).toBeDefined();
  });

  test("이동시 실행오류가 있는지 체크", () => {
    const brideGame = new BridgeGame();
    brideGame.ready(3);
    let moving = ["U","D","D"]

    expect(brideGame.move(moving)).toBeFalsy();
  });

  test("재실행시 명령값을 1로 호출하는지 테스트한다.", () => {
    const brideGame = new BridgeGame();
    let result = brideGame.retry("R")

    expect(result).toEqual(1);
  });

  test("재실행 여부 시 종료 명령값을 2로 호출하는지 테스트한다.", () => {
    const brideGame = new BridgeGame();
    let result = brideGame.retry("Q")

    expect(result).toEqual(2);
  });
});