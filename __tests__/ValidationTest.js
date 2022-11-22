const Validate = require("../src/Validate");

describe("유효성 검사 함수 테스트", () => {
  test.each(["abdc", 1000, 0, 1, 2, 21])("다리 길이 입력 테스트", (input) => {
    expect(() => {
      Validate.validateBridgeSize(input);
    }).toThrow("[ERROR]");
  });

  test.each(['u', 'd', 'UU', 'DD', 0, 1, 100])("이동할 위치 입력 테스트", (input) => {
    expect(() => {
      Validate.validateBridgeSize(input);
    }).toThrow("[ERROR]");
  });

  test.each(['r', 'q', 'RR', 'QQ', 0, 1, 2, 21])("종료 재시작 입력 테스트", (input) => {
    expect(() => {
      Validate.validateBridgeSize(input);
    }).toThrow("[ERROR]");
  });

});
