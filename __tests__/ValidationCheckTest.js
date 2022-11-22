const ValidationCheck = require("../src/feature/Validation/VaildationCheck");
const varType = require("../src/lib/const/varType");

describe("1. 숫자 타입을 정확히 확인해 주는가?", () => {
  const testCase_fail = [
    { testId: "1-1", param: "" },
    { testId: "1-2", param: "12_23" },
    { testId: "1-3", param: [] },
    { testId: "1-4", param: null },
    { testId: "1-5", param: "12 3" },
  ];
  test.each(testCase_fail)(
    "$testId. 숫자값을 받지 않았을 때, $param",
    ({ param }) => {
      expect(() => ValidationCheck.isNumber(param)).toThrow();
    }
  );
  const testCase_pass = [
    { testId: "1-4", param: 123 },
    { testId: "1-5", param: "123" },
    { testId: "1-6", param: " 123 " },
  ];
  test.each(testCase_pass)(
    "$testId. 숫자값을 받았을 때, $param",
    ({ param }) => {
      expect(ValidationCheck.isNumber(param));
    }
  );
});

describe("2. 값의 타입을 정확히 확인해 주는가? ", () => {
  const testCase_fail = [
    { testId: "1-1", param: [varType.string, 1] },
    { testId: "1-2", param: [varType.array, { a: 1, b: 2 }] },
    { testId: "1-3", param: [varType.number, "hello"] },
  ];
  test.each(testCase_fail)(
    "$testId. 값의 타입이 정확하지 않을 때, $param",
    ({ param }) => {
      expect(() => ValidationCheck.isExactVarType(...param)).toThrow();
    }
  );

  const testCase_pass = [
    { testId: "1-4", param: [varType.string, "thisIsString"] },
    { testId: "1-5", param: [varType.array, [1, 2, 3]] },
  ];
  test.each(testCase_pass)(
    "$testId. 값의 타입이 정확할 때, $param",
    ({ param }) => {
      expect(ValidationCheck.isExactVarType(...param));
    }
  );
});

describe("3. 숫자가 해당 범위안에 있지 잘 확인해 주는가?", () => {
  const testCase_fail = [
    { testId: "2-1", param: [[3, 20], 2] },
    { testId: "2-2", param: [[3, 20], 201] },
  ];
  test.each(testCase_fail)(
    "$testId. 숫자가 해당 범위 안에 없을 때, $param",
    ({ param }) => {
      expect(() => ValidationCheck.isNumberIntheRange(...param)).toThrow();
    }
  );

  const testCase_pass = [
    { testId: "2-3", param: [[2, 30], 10] },
    { testId: "2-4", param: [[3, 20], 20] },
  ];
  test.each(testCase_pass)(
    "$testId. 숫자가 해당 범위 안에 들어있을 때, $param",
    ({ param }) => {
      expect(ValidationCheck.isNumberIntheRange(...param));
    }
  );
});

describe("4. 문자열이 해당 목록 안에 들어있는지 잘 확인해 주는가?,", () => {
  const testCase_fail = [
    { testId: "3-1", param: [["U", "D"], "d"] },
    { testId: "3-2", param: [["U", "D"], "F"] },
  ];

  test.each(testCase_fail)(
    "$testId 문자열이 해당 목록 안에 들어있지 않을 때 , $param",
    ({ param }) => {
      expect(() => ValidationCheck.isStringIntheList(...param)).toThrow();
    }
  );
  const testCase_pass = [{ testId: "3-3", param: [["U", "D"], "U"] }];
  test.each(testCase_pass)(
    "$testId 문자열이 해당 목록 안에 들어있을 때 , $param",
    ({ param }) => {
      expect(ValidationCheck.isStringIntheList(...param));
    }
  );
});
