const Application = require('../src/Application');

const NUMBER_ERROR_TEXT = '[ERROR] 전달된 인수는 숫자 타입이 아닙니다.';
const VALIDATION_ARRAY_TEXT = '[ERROR] 전달된 인수는 배열 타입이 아닙니다.';
const RANGE_ERROR_TEXT = '[ERROR] 지정한 범위의 값이 아닙니다.';

describe('숫자 변환 함수 테스트', () => {
  test('메소드 이름은 "convertNumber"로 정의된다.', () => {
    const METHOD_NAME = 'convertNumber';

    expect(Application.convertNumber.name).toEqual(METHOD_NAME);
  });

  test('전달받은 인수를 숫자로 변환시킨다.', () => {
    const EXPECTED = '111';
    const RECEIVED = 111;

    expect(Application.convertNumber(EXPECTED)).toEqual(RECEIVED);
  });

  test('전달받은 인수는 숫자로 변환이 불가능하면 예외를 발생시킨다.', () => {
    expect(() => {
      const EXPECTED = 'a1a1';

      Application.convertNumber(EXPECTED);
    }).toThrow(NUMBER_ERROR_TEXT);
  });
});

describe('배열 생성 함수 테스트', () => {
  const mockFn = () => {};

  test('메소드 이름은 "createArray"로 정의된다.', () => {
    const METHOD_NAME = 'createArray';

    expect(Application.createArray.name).toEqual(METHOD_NAME);
  });

  test('첫 번째 인자가 숫자로 변환이 불가능하면 예외를 발생한다.', () => {
    const EXPECTED = 'AZ';

    expect(() => {
      Application.createArray(EXPECTED, mockFn);
    }).toThrow(NUMBER_ERROR_TEXT);
  });

  test('두 번째 인자가 함수가 아니라면 예외를 발생한다.', () => {
    const EXPECTED1 = '123';
    const EXPECTED2 = [];

    expect(() => {
      Application.createArray(EXPECTED1, EXPECTED2);
    }).toThrow();
  });

  test.each(['2', '21'])(
    '지정된 범위를 벗어나면 예외를 발생시킨다.',
    (EXPECTED) => {
      expect(() => {
        Application.createArray(EXPECTED, mockFn);
      }).toThrow(RANGE_ERROR_TEXT);
    },
  );

  test('인수를 전달하면 [1, 2, 3]을 기대한다.', () => {
    const EXPECTED1 = '3';
    const EXPECTED2 = (_, index) => index + 1;
    const RECEIVED = [1, 2, 3];

    expect(Application.createArray(EXPECTED1, EXPECTED2)).toStrictEqual(RECEIVED);
  });
});

describe('3 ~ 20 범위 체크 함수 테스트', () => {
  test('메소드 이름은 "checkRangeThreeToTwenty"로 정의된다.', () => {
    const METHOD_NAME = 'checkRangeThreeToTwenty';

    expect(Application.checkRangeThreeToTwenty.name).toEqual(METHOD_NAME);
  });

  test.each([0, 1, 2, 21, 22])(
    '3 ~ 20 범위를 벗어나면 예외를 발생시킨다.',
    (EXPECTED) => {
      expect(() => {
        Application.checkRangeThreeToTwenty(EXPECTED);
      }).toThrow(RANGE_ERROR_TEXT);
    },
  );

  test('인자가 숫자가 아니라면 예외를 발생한다.', () => {
    expect(() => {
      const EXPECTED = NaN;

      Application.checkRangeThreeToTwenty(EXPECTED);
    }).toThrow(NUMBER_ERROR_TEXT);
  });
});

describe('배열 복사 함수 테스트', () => {
  test('메소드 이름은 "copyArray"로 정의된다.', () => {
    const METHOD_NAME = 'copyArray';

    expect(Application.copyArray.name).toEqual(METHOD_NAME);
  });

  test('복사한 배열은 원본 배열과 참조가 다르다.', () => {
    const EXPECTED = [1, 2, 3, 4, 5];

    expect(Application.copyArray(EXPECTED) !== EXPECTED).toBeTruthy();
  });

  test('전달받은 인자가 배열이 아니라면 예외를 발생한다.', () => {
    expect(() => {
      const EXPECTED = 1;

      Application.copyArray(EXPECTED);
    }).toThrow(VALIDATION_ARRAY_TEXT);
  });

  test('전달받은 인자가 배열이라면 예외를 발생시키지 않는다.', () => {
    expect(() => {
      const EXPECTED = [1];

      Application.copyArray(EXPECTED);
    }).not.toThrow(VALIDATION_ARRAY_TEXT);
  });
});

describe('올바른 문자열 파악 함수 테스트', () => {
  const INCLUDE_TARGET = ['U', 'D'];

  test('메소드 이름은 "hasContain "로 정의된다.', () => {
    const METHOD_NAME = 'hasContain';

    expect(Application.hasContain.name).toEqual(METHOD_NAME);
  });

  test('대문자 U, 대문자 D를 입력을 제외한 값은 예외를 발생한다.', () => {
    expect(() => {
      const hasContain = Application.hasContain(INCLUDE_TARGET);
      const EXPECTED = 'K';

      hasContain(EXPECTED);
    }).toThrow(RANGE_ERROR_TEXT);
  });

  test('대문자 U, 대문자 D를 입력을 포함한 값은 예외를 발생시키지 않는다.', () => {
    expect(() => {
      const hasContain = Application.hasContain(INCLUDE_TARGET);
      const EXPECTED = 'D';

      hasContain(EXPECTED);
    }).not.toThrow(RANGE_ERROR_TEXT);
  });

  test('배열을 전달하지 않으면 예외를 발생시킨다.', () => {
    expect(() => {
      const EXPECTED = 'U';

      Application.hasContain(EXPECTED);
    }).toThrow(VALIDATION_ARRAY_TEXT);
  });
});

describe('아이템 치환 함수 테스트', () => {
  const REPLCE_ITME_1 = ['D', 1];
  const REPLCE_ITME_2 = ['U', 0];
  const RECEIVED = 1;

  test('메소드 이름은 "replace "로 정의된다.', () => {
    const METHOD_NAME = 'replace';

    expect(Application.replace.name).toEqual(METHOD_NAME);
  });

  test('"D"를 전달하면 1을 반환한다.', () => {
    const TARGET_STRING = 'D';

    expect(Application.replace(TARGET_STRING, REPLCE_ITME_1, REPLCE_ITME_2)).toEqual(RECEIVED);
  });

  test('아무것도 일치하지 않는다면 예외를 발생시킨다.', () => {
    expect(() => {
      const TARGET_STRING = 'K';

      expect(Application.replace(TARGET_STRING, REPLCE_ITME_1, REPLCE_ITME_2)).toEqual(RECEIVED);
    }).toThrow(RANGE_ERROR_TEXT);
  });
});

describe('배열 길이 반환 함수 테스트', () => {
  test('메소드 이름은 "getArrayLength "로 정의된다.', () => {
    const METHOD_NAME = 'getArrayLength';

    expect(Application.getArrayLength.name).toEqual(METHOD_NAME);
  });

  test('인수가 배열이 아니라면 예외를 발생시킨다.', () => {
    expect(() => {
      Application.getArrayLength('3');
    }).toThrow(VALIDATION_ARRAY_TEXT);
  });

  test('요소가 3개라면 3을 반환한다.', () => {
    const EXPECTED = [1, 2, 3];
    const RECEIVED = 3;

    expect(Application.getArrayLength(EXPECTED)).toEqual(RECEIVED);
  });
});
