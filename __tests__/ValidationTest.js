const Validation = require("../src/Validation");

describe("검증 메서드에 대한 테스트를 구현합니다.", () => {
  test.each([
    [1, 10, 100],
    [1, 2, 3],
  ])("범위 값을 벗어난 경우 false를 반환합니다.", (start, end, value) => {
    expect(Validation.isInRange(start, end, value)).toBe(false);
  });
  test.each([
    [1, 1, 1],
    [1, 10, 5],
  ])("범위 값 내에 있을 경우 true를 반환합니다.", (start, end, value) => {
    expect(Validation.isInRange(start, end, value)).toBe(true);
  });
  //The function that throws an exception needs to be invoked within a wrapping function otherwise the toThrow assertion will fail.
  test("범위 값의 설정이 잘못된 경우 에러를 반환합니다.", () => {
    const [start, end, value] = [10, 1, 5];
    expect(() => Validation.isInRange(start, end, value)).toThrow(
      "[ERROR] end는 start보다 항상 크거나 같아야 합니다."
    );
  });

  test.each([[21], [1], ["A"]])(
    "다리 길이의 값이 2~20을 초과하거나 숫자가 아닌 경우 에러가 발생합니다.",
    (input) => {
      expect(() => Validation.validateBridgeLength(input)).toThrow("[ERROR]");
    }
  );
  test.each([["2"], [20], [10]])(
    "다리 길이의 값이 2~20을 사이인 경우 해당 숫자 값을 반환합니다.",
    (input) => {
      expect(Validation.validateBridgeLength(input)).toBe(Number(input));
    }
  );
});
