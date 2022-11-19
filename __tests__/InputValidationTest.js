const InputVaildation = require("../src/InputValidation");

describe('InputValidation 클래스의 ofBridgeLength() 테스트', () => {
  test.each([[1], ['a'], [21], [2], ['aa'], ['2a'], [0]])('3~20 범위 외의 값이 들어왔을때 throw', (input) => {
    expect(() => { InputVaildation.ofBridgeLength(input); }).toThrow();
  });
}); 