const App = require("../src/App");

describe("R or Q 가 입력 받았을 경우 확인", () => {
  test(" R-> 게임 재시작 ", () => {
    const app = new App();
    app.play();
    const tryGame = app.tryGame;
    app.restart(true);
    expect(app.tryGame).toBe(tryGame + 1);
  });
  test(" Q-> 게임 재시작 ", () => {
    const app = new App();
    app.play();
    const tryGame = app.tryGame;
    app.restart(false);
    expect(app.tryGame).toBe(tryGame);
  });
  test(" 재식작 size 동일 테스트 ", () => {
    const app = new App();
    app.size = 3;
    app.play();
    const size1 = app.size;
    app.restart(true);
    const size2 = app.size;
    expect(size1).toBe(size2);
  });
});
