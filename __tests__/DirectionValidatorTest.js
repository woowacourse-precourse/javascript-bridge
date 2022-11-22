const DirectionValidator = require("../src/utils/DirectionValidator");
describe("DirectionValidtor 테스트", () => {
  test.each([["A"], ["ㄱ"]])(" validateDirection 테스트", (input) => {
    expect(() => {
      DirectionValidator.validateDirection(input);
    }).toThrow("[ERROR] 잘못된 입력입니다. U 또는 D를 입력해주세요.");
  });
});
