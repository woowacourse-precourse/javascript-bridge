const Validation = require("../src/Validation");

describe("검증 메서드에 대한 테스트를 구현합니다.", () => {
  test("isSame은 동일한 값일 경우 true를 반환.", () => {
    expect(Validation.isSame(10, 10)).toBe(true);
  });
  test("isSame은 동일한 값이 아닌 경우 false를 반환.", () => {
    expect(Validation.isSame(1, 10)).toBe(false);
  });
  test("isDifferent는 동일한 값일 경우 false를 반환", () => {
    expect(Validation.isDifferent(4, 4)).toBe(false);
  });
  test("isDifferent는 동일한 값이 아닐 경우 true를 반환", () => {
    expect(Validation.isDifferent(4, 6)).toBe(true);
  });
  test.each([
    [1, 10, 100],
    [1, 2, 3],
  ])("isInRange는 범위 값을 벗어난 경우 false를 반환", (start, end, value) => {
    expect(Validation.isInRange(start, end, value)).toBe(false);
  });
  test.each([
    [1, 1, 1],
    [1, 10, 5],
  ])("isInRange 범위 값 내에 있을 경우 true를 반환", (start, end, value) => {
    expect(Validation.isInRange(start, end, value)).toBe(true);
  });
  //The function that throws an exception needs to be invoked within a wrapping function otherwise the toThrow assertion will fail.
  test("isInRange는 범위 값의 설정이 잘못된 경우 에러를 반환", () => {
    const [start, end, value] = [10, 1, 5];
    expect(() => Validation.isInRange(start, end, value)).toThrow(
      "[ERROR] end는 start보다 항상 크거나 같아야 합니다."
    );
  });

  test.each([[21], [1], ["A"]])(
    "다리 길이의 값이 2~20을 초과하거나 숫자가 아닌 경우 에러가 발생.",
    (input) => {
      expect(() => Validation.validateBridgeLength(input)).toThrow("[ERROR]");
    }
  );
  test.each([["2"], [20], [10]])(
    "다리 길이의 값이 2~20을 사이인 경우 해당 숫자 값을 반환.",
    (input) => {
      expect(Validation.validateBridgeLength(input)).toBe(parseInt(input, 10));
    }
  );

  test.each([
    ["A", ["B", "C"]],
    [1, [2, 3]],
  ])(
    "해당 커맨드가 허용한 값이 아니라면 에러를 반환.",
    (command, permission) => {
      expect(() => Validation.validateCommand(command, permission)).toThrow();
    }
  );
  test.each([
    ["A", ["A", "B", "C"]],
    [1, [1, 2, 3]],
  ])(
    "해당 커맨드가 허용한 값이면 해당 커맨드를 그대로 반환.",
    (command, permission) => {
      expect(Validation.validateCommand(command, permission)).toBe(command);
    }
  );
  test.each([
    [
      ["A", "B", "C"],
      ["A", "B", "C"],
    ],
    [
      [1, 2, 3],
      [1, 2, 3],
    ],
  ])(
    "한 배열과 다른 배열의 원소값이 모두 같다면 '성공'을 반환.",
    (answer, inputs) => {
      expect(Validation.validateSucess(answer, inputs)).toBe("성공");
    }
  );
  test.each([
    [
      ["A", "B", "D"],
      ["A", "B", "C"],
    ],
    [
      [4, 6, 5],
      [1, 2, 3],
    ],
  ])(
    "한 배열과 다른 배열의 원소값이 하나라도 다르면 '실패'를 반환.",
    (answer, inputs) => {
      expect(Validation.validateSucess(answer, inputs)).toBe("실패");
    }
  );
});
