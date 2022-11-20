const MissionUtils = require("@woowacourse/mission-utils");
const InputView = require("../src/InputView");

MissionUtils.Console.readLine = jest.fn();

const mockQuestions = (answers) => {
  answers.reduce((acc, input) => {
    return acc.mockImplementationOnce((_, callback) => {
      callback(input);
    });
  }, MissionUtils.Console.readLine);
};
const getParams = (testCase) => testCase.map(({ param }) => param);

const testList = () => {
  describe("입력 기능 테스트", () => {
    bridgeSizeInput();
    bridgeMovingInput();
    gameCommandInput();
  });
};

const bridgeSizeInput = () => {
  const testCase_1_fail = [
    { testId: "1-1", param: "" },
    { testId: "1-2", param: "hi" },
    { testId: "1-3", param: 23 },
    { testId: "1-4", param: 36.5 },
  ];
  mockQuestions(getParams(testCase_1_fail));

  describe(`1. 다리 길이 값이 올바른가? `, () => {
    test.each(testCase_1_fail)(
      `1-$testId 입력값이 올바르지 않을 떄 : $param`,
      ({ param }) => expect(() => InputView.readBridgeSize()).toThrow()
    );

    const testCase_1_pass = [
      { testId: "2-1", param: 5 },
      { testId: "2-2", param: 20 },
    ];
    mockQuestions(getParams(testCase_1_pass));

    test.each(testCase_1_pass)(
      `1-$testId 입력값이 올바를 때 : $param`,
      ({ param }) => expect(InputView.readBridgeSize()).toBe(param)
    );
  });
};

const bridgeMovingInput = () => {
  describe(`2. 이동할 칸 값이 올바른가? `, () => {
    const testCase_fail = [
      { testId: "1-1", param: "u" },
      { testId: "1-2", param: "r" },
    ];
    mockQuestions(getParams(testCase_fail));
    test.each(testCase_fail)(
      `2-$testId 입력값이 올바르지 않을 때 : $param`,
      ({ param }) => expect(() => InputView.readMoving()).toThrow()
    );

    const testCase_pass = [
      { testId: "2-1", param: "U" },
      { testId: "2-2", param: "D" },
    ];
    mockQuestions(getParams(testCase_pass));
    test.each(testCase_pass)(
      `2-$testId 입력값이 올바를 때 : $param`,
      ({ param }) => expect(InputView.readMoving()).toBe(param)
    );
  });
};
const gameCommandInput = () => {
  describe(`3. 게임 재시작 / 종료여부 값이 올바른가? `, () => {
    const testCase_fail = [
      { testId: "1-1", param: "~" },
      { testId: "1-2", param: "r" },
    ];
    mockQuestions(getParams(testCase_fail));
    test.each(testCase_fail)(`3-$testId 입력값이 올바를 때 : $param`, () => {
      expect(() => InputView.readGameCommand()).toThrow();
    });

    const testCase_pass = [
      { testId: "2-1", param: "R" },
      { testId: "2-1", param: "Q" },
    ];
    mockQuestions(getParams(testCase_pass));
    test.each(testCase_pass)(
      `3-$testId 입력값이 올바르지 않을 때 : $param`,
      ({ param }) => {
        expect(InputView.readGameCommand()).toBe(param);
      }
    );
  });
};

testList();
