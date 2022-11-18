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
  test(`arrUp : 'O', 'U' ,'U' || arrDown : " ", "X", " " `, () => {
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
