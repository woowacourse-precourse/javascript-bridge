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

describe('checkDirection 메서드 테스트', () => {
  test('U 또는 D가 아닌 값을 입력하면 errorMsg의 값이 존재하는 객체를 반환한다.', () => {
    const { errorMsg } = Validation.checkDirection('Y');

    expect(errorMsg).toEqual('\n[ERROR] U 또는 D만 입력할 수 있습니다.');
  });

  test('소문자 u, d를 입력해도 errorMsg의 값이 존재하는 객체를 반환한다.', () => {
    const { errorMsg } = Validation.checkDirection('u');

    expect(errorMsg).toEqual('\n[ERROR] U 또는 D만 입력할 수 있습니다.');
  });

  test.each([['U'], ['D']])(
    'U 또는 D를 입력하면 errorMsg의 값이 undefined인 객체를 반환한다. direction: %s',
    (direction) => {
      const { errorMsg } = Validation.checkDirection(direction);

      expect(errorMsg).toBeUndefined();
    }
  );
});

describe('checkCommandOption 메서드 테스트', () => {
  test('R 또는 Q가 아닌 값을 입력하면 errorMsg의 값이 존재하는 객체를 반환한다.', () => {
    const { errorMsg } = Validation.checkCommandOption('D');

    expect(errorMsg).toEqual('\n[ERROR] R 또는 Q만 입력할 수 있습니다.');
  });

  test('소문자 r, q를 입력해도 errorMsg의 값이 존재하는 객체를 반환한다.', () => {
    const { errorMsg } = Validation.checkCommandOption('q');

    expect(errorMsg).toEqual('\n[ERROR] R 또는 Q만 입력할 수 있습니다.');
  });

  test.each([['R'], ['Q']])(
    'R 또는 Q를 입력하면 errorMsg의 값이 undefined인 객체를 반환한다. commandOption: %s',
    (commandOption) => {
      const { errorMsg } = Validation.checkCommandOption(commandOption);

      expect(errorMsg).toBeUndefined();
    }
  );
});
