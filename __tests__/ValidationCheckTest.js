const ValidationCheck = require("../src/VaildationCheck");
const varType = require("../src/utils/const/varType");

const Validate = new ValidationCheck();

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
      expect(() => Validate.isNumber(param)).toThrow();
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
      expect(Validate.isNumber(param)).toBe(true);
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
      expect(() => Validate.isExactVarType(...param)).toThrow();
    }
  );

  const testCase_pass = [
    { testId: "1-4", param: [varType.string, "thisIsString"] },
    { testId: "1-5", param: [varType.array, [1, 2, 3]] },
  ];
  test.each(testCase_pass)(
    "$testId. 값의 타입이 정확할 때, $param",
    ({ param }) => {
      expect(Validate.isExactVarType(...param)).toBe(true);
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
      expect(() => Validate.isNumberIntheRange(...param)).toThrow();
    }
  );

  const testCase_pass = [
    { testId: "2-3", param: [[2, 30], 10] },
    { testId: "2-4", param: [[3, 20], 20] },
  ];
  test.each(testCase_pass)(
    "$testId. 숫자가 해당 범위 안에 들어있을 때, $param",
    ({ param }) => {
      expect(Validate.isNumberIntheRange(...param)).toBe(true);
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
      expect(() => Validate.isStringIntheList(...param)).toThrow();
    }
  );
  const testCase_pass = [{ testId: "3-3", param: [["U", "D"], "U"] }];
  test.each(testCase_pass)(
    "$testId 문자열이 해당 목록 안에 들어있을 때 , $param",
    ({ param }) => {
      expect(Validate.isStringIntheList(...param)).toBe(true);
    }
  );
});

describe("5. 객체안의 프로퍼티 목록과, 프로퍼티 밸류의 값이 정확한지 잘 확인해 주는가?", () => {
  const testCase_fail_notCorrectProperty = [
    {
      testId: "4-1",
      param: [
        { a: 1, b: 1 },
        { a: 1, x: 1 },
      ],
    },
    {
      testId: "4-2",
      param: [
        { a: 1, b: 1 },
        { a: 1, b: 1, x: 1 },
      ],
    },
  ];

  test.each(testCase_fail_notCorrectProperty)(
    "$testId 객체안의 프로퍼티 목록이 일치 하지 않을 때, $param",
    ({ param }) => {
      expect(() => Validate.isExactObjectStructure(...param)).toThrow();
    }
  );

  const testCase_fail_notSameType = [
    {
      testId: "4-3",
      param: [
        { a: 1, b: 1 },
        { a: "hi", b: 1 },
      ],
    },
    {
      testId: "4-4",
      param: [
        { a: [], b: {} },
        { a: {}, b: [] },
      ],
    },
  ];
  test.each(testCase_fail_notSameType)(
    "$testId  객체안의 프로퍼티 목록은 일치하지만, 값의 타입이 다를 때, $param",
    ({ param }) => {
      expect(() => Validate.isExactObjectStructure(...param)).toThrow();
    }
  );

  const testCase_pass = [
    {
      testId: "4-5",
      param: [
        { a: [], b: 1 },
        { a: [], b: 2 },
      ],
    },
  ];
  test.each(testCase_pass)(
    "$testId 객체안의 프로퍼티 목록과 값의 타입이 모두 일치할 때 ,$param",
    ({ param }) => {
      expect(Validate.isExactObjectStructure(...param)).toBe(true);
    }
  );
});
