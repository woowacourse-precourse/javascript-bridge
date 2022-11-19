const { validateBridgeSize } = require('../src/InputView');

describe('입력 테스트', () => {
  test.each([['ad3'], ['10a'], ['2'], ['21'], ['-1']])('다리 길이 입력에 대한 예외 처리', (input) => {
      expect(() => {
        validateBridgeSize(input);
      }).toThrow();
    }
  );

});
