const Bridge = require("../src/Bridge");

describe("다리 클래스 테스트", () => {
  test("다리 길이가 20 초과일 때 예외 처리", () => {
    const path = Array.from({ length: 21 }, () => "U");

    expect(() => {
      new Bridge(path);
    }).toThrow("[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.");
  });

  test("다리 길이가 3 미만일 때 예외 처리", () => {
    const path = ["U", "U"];

    expect(() => {
      new Bridge(path);
    }).toThrow("[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.");
  });
});
