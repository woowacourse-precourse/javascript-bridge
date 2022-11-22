const Validation = require("../src/utils/validation");

describe("유효성 검사.", () => {
  test.each([["u"], ["d"], ["T"]])("U 또는 D만 입력 가능", (command) => {
    expect(() => {
      const validation = new Validation();
      validation.isUpOrDown(command);
    }).toThrow();
  });

  test.each([[1], [22], ["t"]])("3이상 20이하 숫자만 입력 가능", (command) => {
    expect(() => {
      const validation = new Validation();
      validation.isValidLength(command);
    }).toThrow();
  });

  test.each([["r"], ["q"], ["F"]])("R 또는 Q만 입력 가능", (command) => {
    expect(() => {
      const validation = new Validation();
      validation.isRestartOrQuit(command);
    }).toThrow();
  });
});
