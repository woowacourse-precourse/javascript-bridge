const {
  SizeConstraints,
  MoveConstraints,
  CommandConstraints,
} = require("../src/Constraints");

describe("제한 조건 테스트", () => {
  test("숫자가 아닌 다리 길이 입력값 테스트", () => {
    expect(() => {
      const sizeConstraints = new SizeConstraints("3 ");
      sizeConstraints.checkOnlyNumber();
    }).toThrow("[ERROR] 숫자만 입력 가능합니다.");
  });

  test("범위 외 다리 길이 입력값 테스트", () => {
    expect(() => {
      const sizeConstraints = new SizeConstraints("1");
      sizeConstraints.checkNumberRange();
    }).toThrow("[ERROR] 다리 길이는 3 이상 20 이하만 가능합니다.");
  });

  test("0으로 시작되는 다리 길이 입력값 테스트", () => {
    expect(() => {
      const sizeConstraints = new SizeConstraints("04");
      sizeConstraints.checkStartZero();
    }).toThrow("[ERROR] 0으로 시작하는 숫자는 입력할 수 없습니다.");
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
