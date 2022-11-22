const Exception = require('../src/Exception');


describe("다리 길이 예외 테스트", () => {
  test.each([["a"],["3.3"]])("다리 길이가 정수값이 아니면 예외가 발생한다.", (input) => {
    expect(() => {
      new Exception().exceptBridgeLength(input);
    }).toThrow("[ERROR]");
  });

  test.each([["2"],["21"]])("다리 길이가 3미만 20초과면 예외가 발생한다.", (input) => {
    expect(() => {
      new Exception().exceptBridgeLength(input);
    }).toThrow("[ERROR]");
  });

});

describe("이동할 칸 선택 값 예외 테스트", () => {
  test.each([["a"],["1"],["*"],["A"]])("U과 D를 제외한 나머지 값은 모두 에러 처리", 
  (input) => {
    expect(() => {
      new Exception().exceptMovingUpDown(input);
    }).toThrow("[ERROR]");
  });
});

describe("재시도 입력값 예외 테스트", () => {
  test.each([["a"],["1"],["*"],["U"]])("R과 Q를 제외한 나머지 값은 모두 에러 처리", 
  (input) => {
    expect(() => {
      new Exception().exceptRetryQuit(input);
    }).toThrow("[ERROR]");
  });
});
