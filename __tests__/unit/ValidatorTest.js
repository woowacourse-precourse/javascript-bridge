const Validator = require('../../src/utils/Validator');

const MESSAGE_ACCEPT = '입력은 정상적으로 동작한다.';
const MESSAGE_EXCEPT = '입력은 예외를 발생시킨다.';
describe('Validator checkTruthy 테스트', () => {
  const validInput = [1, true, 'a', [], {}];
  validInput.forEach(validInputValue => {
    test(`${validInputValue} ${MESSAGE_ACCEPT}`, () => {
      expect(() => Validator.checkTruthy(validInputValue)).not.toThrow('[ERROR]');
    });
  });

  const inValidInput = [false, null, undefined, NaN, 0, -0, 0n, ''];
  inValidInput.forEach(invalidInputValue => {
    test(`${invalidInputValue} ${MESSAGE_EXCEPT}`, () => {
      expect(() => Validator.checkTruthy(invalidInputValue)).toThrow('[ERROR]');
    });
  });
});

describe('Validator checkStringType 테스트', () => {
  const validInput = ['a'];
  validInput.forEach(validInputValue => {
    test(`${typeof validInputValue} ${MESSAGE_ACCEPT}`, () => {
      expect(() => Validator.checkStringType(validInputValue)).not.toThrow('[ERROR]');
    });
  });

  const inValidInput = [1, {}, [], null, undefined, NaN, true, false];
  inValidInput.forEach(invalidInputValue => {
    test(`${typeof invalidInputValue} ${MESSAGE_EXCEPT}`, () => {
      expect(() => Validator.checkStringType(invalidInputValue)).toThrow('[ERROR]');
    });
  });
});

describe('Validator checkRowDataOfBridgeSizeIncludes 테스트', () => {
  const validInput = ['123'];
  validInput.forEach(validInputValue => {
    test(`${validInputValue} ${MESSAGE_ACCEPT}`, () => {
      expect(() => Validator.checkRowDataOfBridgeSizeIncludes(validInputValue)).not.toThrow(
        '[ERROR]'
      );
    });
  });

  const inValidInput = ['', '{}', '[]', 'null', 'a1a', '1a1'];
  inValidInput.forEach(invalidInputValue => {
    test(`${invalidInputValue} ${MESSAGE_EXCEPT}`, () => {
      expect(() => Validator.checkRowDataOfBridgeSizeIncludes(invalidInputValue)).toThrow(
        '[ERROR]'
      );
    });
  });
});

describe('Validator checkBridgeSizeRange 테스트', () => {
  const validInput = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  validInput.forEach(validInputValue => {
    test(`${validInputValue} ${MESSAGE_ACCEPT}`, () => {
      expect(() => Validator.checkBridgeSizeRange(validInputValue)).not.toThrow('[ERROR]');
    });
  });

  const inValidInput = [-0, 0, 1, 2, 21, 22, 10000000000000];
  inValidInput.forEach(invalidInputValue => {
    test(`${invalidInputValue} ${MESSAGE_EXCEPT}`, () => {
      expect(() => Validator.checkBridgeSizeRange(invalidInputValue)).toThrow('[ERROR]');
    });
  });
});

describe('Validator checkNumberType 테스트', () => {
  const validInput = [3, 100, 100000, 0, -0, NaN];
  validInput.forEach(validInputValue => {
    test(`${typeof validInputValue} ${MESSAGE_ACCEPT}`, () => {
      expect(() => Validator.checkNumberType(validInputValue)).not.toThrow('[ERROR]');
    });
  });

  const inValidInput = [{}, [], null, undefined, true, false];
  inValidInput.forEach(invalidInputValue => {
    test(`${typeof invalidInputValue} ${MESSAGE_EXCEPT}`, () => {
      expect(() => Validator.checkNumberType(invalidInputValue)).toThrow('[ERROR]');
    });
  });
});

describe('Validator checkArrayType 테스트', () => {
  const validInput = [[], [1, 2, 3]];
  validInput.forEach(validInputValue => {
    test(`${typeof validInputValue} ${MESSAGE_ACCEPT}`, () => {
      expect(() => Validator.checkArrayType(validInputValue)).not.toThrow('[ERROR]');
    });
  });

  const inValidInput = [{}, null, undefined, true, false, 1, '12', NaN];
  inValidInput.forEach(invalidInputValue => {
    test(`${typeof invalidInputValue} ${MESSAGE_EXCEPT}`, () => {
      expect(() => Validator.checkArrayType(invalidInputValue)).toThrow('[ERROR]');
    });
  });
});

describe('Validator checkBridgeSize 테스트', () => {
  const validInput = [
    Array.from({ length: 3 }),
    Array.from({ length: 15 }),
    Array.from({ length: 20 }),
  ];
  validInput.forEach(validInputValue => {
    test(`${validInputValue} ${MESSAGE_ACCEPT}`, () => {
      expect(() => Validator.checkBridgeSize(validInputValue)).not.toThrow('[ERROR]');
    });
  });

  const inValidInput = [
    [],
    Array.from({ length: 1 }),
    Array.from({ length: 2 }),
    Array.from({ length: 21 }),
  ];
  inValidInput.forEach(invalidInputValue => {
    test(`${invalidInputValue} ${MESSAGE_EXCEPT}`, () => {
      expect(() => Validator.checkBridgeSize(invalidInputValue)).toThrow('[ERROR]');
    });
  });
});

describe('Validator checkBridgeIncludes 테스트', () => {
  const validInput = [['U'], ['D'], ['U', 'D']];
  validInput.forEach(validInputValue => {
    test(`${validInputValue} ${MESSAGE_ACCEPT}`, () => {
      expect(() => Validator.checkBridgeIncludes(validInputValue)).not.toThrow('[ERROR]');
    });
  });

  const inValidInput = [[123], ['U', 123], ['U', 123, 'U'], [123, 'D', 123]];
  inValidInput.forEach(invalidInputValue => {
    test(`${invalidInputValue} ${MESSAGE_EXCEPT}`, () => {
      expect(() => Validator.checkBridgeIncludes(invalidInputValue)).toThrow('[ERROR]');
    });
  });
});

describe('Validator checkDirectionLength 테스트', () => {
  const validInput = ['U', 'D'];
  validInput.forEach(validInputValue => {
    test(`${validInputValue} ${MESSAGE_ACCEPT}`, () => {
      expect(() => Validator.checkDirectionLength(validInputValue)).not.toThrow('[ERROR]');
    });
  });

  const inValidInput = ['UD', 'DU'];
  inValidInput.forEach(invalidInputValue => {
    test(`${invalidInputValue} ${MESSAGE_EXCEPT}`, () => {
      expect(() => Validator.checkDirectionLength(invalidInputValue)).toThrow('[ERROR]');
    });
  });
});

describe('Validator checkDirectionIncludes 테스트', () => {
  const validInput = ['U', 'D'];
  validInput.forEach(validInputValue => {
    test(`${validInputValue} ${MESSAGE_ACCEPT}`, () => {
      expect(() => Validator.checkDirectionIncludes(validInputValue)).not.toThrow('[ERROR]');
    });
  });

  const inValidInput = [1, 0, true, 'a', undefined, NaN, [], {}];
  inValidInput.forEach(invalidInputValue => {
    test(`${invalidInputValue} ${MESSAGE_EXCEPT}`, () => {
      expect(() => Validator.checkDirectionIncludes(invalidInputValue)).toThrow('[ERROR]');
    });
  });
});
