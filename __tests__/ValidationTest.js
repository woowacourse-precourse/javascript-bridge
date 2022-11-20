const { describe, expect, test } = require('@jest/globals');
const Validation = require('../src/Validation');

describe('checkBridgeSize 메서트 테스트', () => {
  test.each([['3j'], ['hello']])(
    'size가 숫자가 아니라면 errorMsg의 값이 존재하는 객체를 반환한다. size: %s',
    (size) => {
      const { errorMsg } = Validation.checkBridgeSize(size);

      expect(errorMsg).toEqual('\n[ERROR] 숫자만 입력할 수 있습니다.\n');
    }
  );

  test.each([[2], [-4], [21], [100]])(
    'size의 범위가 3 이상 20 이하가 아니라면 errorMsg의 값이 존재하는 객체를 반환한다. size: %d',
    (size) => {
      const { errorMsg } = Validation.checkBridgeSize(size);

      expect(errorMsg).toEqual(
        '\n[ERROR] 3 이상 20 이하의 숫자만 입력할 수 있습니다.\n'
      );
    }
  );

  test.each([[3], [10], [20]])(
    '3 이상 20 이하의 숫자를 입력하면 errorMsg의 값이 undefined인 객체를 반환한다. size: %d',
    (size) => {
      const { errorMsg } = Validation.checkBridgeSize(size);

      expect(errorMsg).toBeUndefined();
    }
  );
});
