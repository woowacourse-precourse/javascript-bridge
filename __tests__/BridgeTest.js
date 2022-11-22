const Length = require("../src/error/LengthError");
const Cell = require("../src/error/CellError");
const Restart = require("../src/error/RestartError");
describe("예외 처리 에러", () => {
  test("다리 길이가 20을 초과하면 에러가 발생한다.", () => {
    expect(() => {
      new Length(25);
    }).toThrow("[ERROR]");
  });
  test("다리 길이가 3보다 아래면 에러가 발생한다.", () => {
    expect(() => {
      new Length(0);
    }).toThrow("[ERROR]");
  });
  test("U,D 외 입력시 에러가 발생한다.", () => {
    expect(() => {
      new Cell("d");
    }).toThrow("[ERROR]");
  });
  test("R,Q 외 입력시 예외 발생", () => {
    expect(() => {
      new Restart("s");
    }).toThrow("[ERROR]");
  });
});
