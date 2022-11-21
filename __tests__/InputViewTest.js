const { checkBridgeSize, checkMoving, checkGameCommand } = require('../src/InputView');

describe('checkBridgeSize 테스트', () => {
  test('올바른 입력', () => {
    expect(() => {
      checkBridgeSize(3);
    }).not.toThrow();
  });

  test('3 미만의 숫자 입력', () => {
    expect(() => {
      checkBridgeSize(2);
    }).toThrow();
  });

  test('20 초과의 숫자 입력', () => {
    expect(() => {
      checkBridgeSize(21);
    }).toThrow();
  });

  test('소수 입력', () => {
    expect(() => {
      checkBridgeSize(3.14);
    }).toThrow();
  });
});

describe('checkMoving 테스트', () => {
  test('올바른 입력', () => {
    expect(() => {
      checkMoving('U');
    }).not.toThrow();
  });

  test('U, D 이외의 문자 입력', () => {
    expect(() => {
      checkMoving('A');
    }).toThrow();
  });

  test('빈 문자열 입력', () => {
    expect(() => {
      checkMoving('');
    }).toThrow();
  });

  test('공백 입력', () => {
    expect(() => {
      checkMoving(' ');
    }).toThrow();
  });
});

describe('checkGameCommand 테스트', () => {
  test('올바른 입력', () => {
    expect(() => {
      checkGameCommand('R');
    }).not.toThrow();
  });

  test('R, Q 이외의 문자 입력', () => {
    expect(() => {
      checkGameCommand('A');
    }).toThrow();
  });

  test('빈 문자열 입력', () => {
    expect(() => {
      checkMoving('');
    }).toThrow();
  });

  test('공백 입력', () => {
    expect(() => {
      checkMoving(' ');
    }).toThrow();
  });
});
