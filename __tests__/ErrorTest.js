const errorCheck = require('../src/utils/Validation');

describe("예외 throw 테스트", () => {
  test.each([['five'], [1], [21], [0], [-1000]])("다리 길이가 3 ~ 20 사이의 수가 아닌 경우", (input) => {
    expect((input) => {
      errorCheck.checkBridgeSize(input);
    }).toThrow("[ERROR]");
  });
});