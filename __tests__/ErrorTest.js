const errorCheck = require('../src/utils/Validation');

describe("예외 throw 테스트", () => {
  test.each([['five'], [1], [21], [0], [-1000]])("다리 길이가 3 ~ 20 사이의 수가 아닌 경우", (input) => {
    expect((input) => {
      errorCheck.checkBridgeSize(input);
    }).toThrow("[ERROR]");
  });

  test.each([[1], ['R'], [' ']])("이동 시 U나 D가 아닌 다른 문자를 입력한 경우" , (input) => {
    expect((input) => {
      errorCheck.checkCanMove(input);
    }).toThrow("[ERROR]")
  })

  test.each([[1], ['D'], [' ']])("재시작/종료 시 R나 Q가 아닌 다른 문자를 입력한 경우" , (input) => {
    expect((input) => {
      errorCheck.checkCanMove(input);
    }).toThrow("[ERROR]")
  })
});