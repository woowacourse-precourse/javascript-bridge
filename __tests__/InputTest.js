const App = require("../src/App");
const {mockQuestions, getLogSpy, expectLogContains, getOutput, mockRandoms} = require("./ApplicationTest");

describe("예외 테스트", () => {
  test("다리 길이 입력이 3 이상 20 이하가 아닌 경우", () => {
    mockQuestions(["25"]);
    const logSpy = getLogSpy();
    const app = new App();

    app.play();

    expectLogContains(getOutput(logSpy), ["[ERROR]"]);
  });

  test("이동할 칸 입력이 U 나 D 가 아닌 경우", () => {
    mockQuestions(["3", "X"]);
    const logSpy = getLogSpy();
    const app = new App();

    app.play();

    expectLogContains(getOutput(logSpy), ["[ERROR]"]);
  });

  test("게임 재시작/종료 입력이 Q 나 R 이 아닌 경우", () => {
    mockRandoms(["0", "0", "0"]);
    mockQuestions(["3", "U", "X"]);
    const logSpy = getLogSpy();
    const app = new App();

    app.play();

    expectLogContains(getOutput(logSpy), ["[ERROR]"]);
  });
});