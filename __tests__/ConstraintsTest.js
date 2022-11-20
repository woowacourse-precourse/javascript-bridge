const {
  SizeConstraints,
  MoveConstraints,
  CommandConstraints,
} = require("../src/Constraints");

describe("제한 조건 테스트", () => {
  test.each(["3 ", "1", "04"])("다리 길이 입력값 예외 처리", (input) => {
    expect((input) => {
      const sizeConstraints = new SizeConstraints(input);
      sizeConstraints.checkOnlyNumber();
      sizeConstraints.checkNumberRange();
      sizeConstraints.checkStartZero();
    }).toThrow();
  });

  test("움직임 입력에 U나 D가 아닌 입력값 테스트", () => {
    expect(() => {
      const moveConstraints = new MoveConstraints("A");
      moveConstraints.checkInputUorD();
    }).toThrow("[ERROR] U 혹은 D만 입력 가능합니다.");
  });

  test("게임 커맨드는 R과 Q만 받을 수 있다.", () => {
    expect(() => {
      const commandConstraints = new CommandConstraints("U");
      commandConstraints.checkInputRorQ();
    }).toThrow("[ERROR] R 혹은 Q만 입력 가능합니다.");
  });
});
