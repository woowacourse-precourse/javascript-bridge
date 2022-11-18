const GameStart = require("../src/modules/GameStart");

describe("다리 O/X 판별 테스트", () => {
  test(`arrUp : 'O', 'O' ,'O' || arrDown : " ", " ", " " `, () => {
    const GAMESTART = new GameStart(
      ["U", "U", "U"],
      ["U", "U", "U"],
      [" ", " ", " "]
    );
    expect(GAMESTART.getBrigeArr()).toMatchObject([
      ["O", "O", "O"],
      [" ", " ", " "],
    ]);
  });
  test(`'X'값 이후 치환이 중지 됬는지 확인1`, () => {
    const GAMESTART = new GameStart(
      ["U", "D", "U"],
      ["U", "U", "U"],
      [" ", " ", " "]
    );
    expect(GAMESTART.getBrigeArr()).toMatchObject([
      ["O", "U", "U"],
      [" ", "X", " "],
    ]);
  });
  test(`'X'값 이후 치환이 중지 됬는지 확인2`, () => {
    const GAMESTART = new GameStart(
      ["D", "D", "U"],
      ["U", " ", " "],
      [" ", "D", "D"]
    );
    expect(GAMESTART.getBrigeArr()).toMatchObject([
      ["U", " ", " "],
      ["X", "D", "D"],
    ]);
  });
  test(`arrUp : ' ', 'O' ,' ' || arrDown : "O", " ", "O" `, () => {
    const GAMESTART = new GameStart(
      ["D", "U", "D"],
      [" ", "U", " "],
      ["D", " ", "D"]
    );
    expect(GAMESTART.getBrigeArr()).toMatchObject([
      [" ", "O", " "],
      ["O", " ", "O"],
    ]);
  });
});
