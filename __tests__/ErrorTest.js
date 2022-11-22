const App = require("../src/App");
const MissionUtils = require("@woowacourse/mission-utils");

describe("에러 테스트", () => {
  const app = new App();

  test("다리 길이가 3 이하면 에러 발생", () => {
    expect(() => {
      app.makeBridge(1);
    }).toThrow("[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.");
  });

  test("다리 길이가 20초과면 에러 발생", () => {
    expect(() => {
      app.makeBridge(30);
    }).toThrow("[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.");
  });

  test("다리 길이가 숫자가 아니면 에러 발생", () => {
    expect(() => {
      app.makeBridge("E");
    }).toThrow("[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.");
  });

  test("U/D 외의 cmd 입력시 에러 발생", () => {
    expect(() => {
      app.move("A");
    }).toThrow("[ERROR] U 또는 D를 입력해주세요.");
  });

  test("R/Q 외의 cmd 입력시 에러 발생", () => {
    expect(() => {
      app.makeDecision("A");
    }).toThrow("[ERROR] Q 또는 R를 입력해주세요.");
  });
});
