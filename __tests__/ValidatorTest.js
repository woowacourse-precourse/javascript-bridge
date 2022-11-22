const Validator = require('../src/Validator');

describe('사이즈 입력 값 유효성 테스트', () => {
  test('숫자 이외의 한글 문자를 입력한 경우 예외 처리한다.', () => {
    expect(() => {
      Validator.bridgeSize('김');
    }).toThrow('[ERROR]');
  });
  test('숫자 이외의 영어 문자를 입력한 경우 예외 처리한다.', () => {
    expect(() => {
      Validator.bridgeSize('r');
    }).toThrow('[ERROR]');
  });
  test('3미만인 숫자를 입력한 경우 예외 처리한다.', () => {
    expect(() => {
      Validator.bridgeSize(1);
    }).toThrow('[ERROR]');
  });
  test('20초과인 숫자를 입력한 경우 예외 처리한다.', () => {
    expect(() => {
      Validator.bridgeSize(21);
    }).toThrow('[ERROR]');
  });
  test('특수 문자를 입력한 경우 예외 처리한다.', () => {
    expect(() => {
      Validator.bridgeSize('@');
    }).toThrow('[ERROR]');
  });
});

describe('이동할 칸 입력 값 유효성 테스트', () => {
  test('숫자를 입력한 경우 예외 처리한다.', () => {
    expect(() => {
      Validator.moving(1);
    }).toThrow('[ERROR]');
  });
  test('U(위 칸), D(아래 칸) 이외의 한글 문자를 입력한 경우 예외 처리한다.', () => {
    expect(() => {
      Validator.moving('위');
    }).toThrow('[ERROR]');
  });
  test('U(위 칸), D(아래 칸) 이외의 영어 문자를 입력한 경우 예외 처리한다.', () => {
    expect(() => {
      Validator.moving('T');
    }).toThrow('[ERROR]');
  });
  test('특수 문자를 입력한 경우 예외 처리한다.', () => {
    expect(() => {
      Validator.moving('@');
    }).toThrow('[ERROR]');
  });
});

describe('재시작 여부 입력 값 유효성 테스트', () => {
  test('숫자를 입력한 경우 예외 처리한다.', () => {
    expect(() => {
      Validator.retryOrQuit(1);
    }).toThrow('[ERROR]');
  });
  test('특수 문자를 입력한 경우 예외 처리한다.', () => {
    expect(() => {
      Validator.retryOrQuit('@');
    }).toThrow('[ERROR]');
  });
  test('R(재시작), Q(종료) 이외의 한글 문자를 입력한 경우 예외 처리한다.', () => {
    expect(() => {
      Validator.retryOrQuit('재시작');
    }).toThrow('[ERROR]');
  });
  test('R(재시작), Q(종료) 이외의 영어 문자를 입력한 경우 예외 처리한다.', () => {
    expect(() => {
      Validator.retryOrQuit('V');
    }).toThrow('[ERROR]');
  });
});
