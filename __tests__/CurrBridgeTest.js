const CurrBridge = require('../src/model/CurrBridge');

const validateDirection = (input) => {
  const currBridge = new CurrBridge();
  return currBridge.validate(input);
};

describe('CurrBridge 클래스 테스트', () => {
  test('예외 테스트 : 입력값이 문자가 아닌 경우 예외 처리한다', () => {
    expect(() => validateDirection('17')).toThrow(
      '[ERROR] 숫자를 제외한 문자를 입력해주세요.'
    );
  });

  test('예외 테스트 : 입력값이 U 또는 D가 아닌 경우 예외 처리한다', () => {
    expect(() => validateDirection('R')).toThrow(
      '[ERROR] U (위칸) 와 D (아래칸) 중에서만 이동할 칸을 정해 입력해주세요.'
    );
  });

  test('예외 테스트 : 입력값이 대문자가 아닌 소문자(u 또는 d)인 경우 예외 처리한다', () => {
    expect(() => validateDirection('u')).toThrow(
      '[ERROR] 소문자가 아닌 대문자를 입력해주세요.'
    );
  });

  test('예외 테스트 : 입력값이 빈칸인 경우 예외 처리한다', () => {
    expect(() =>
      validateDirection('').toThrow(
        '[ERROR] 공백을 입력할 수 없습니다. 값을 입력해주세요.'
      )
    );
  });
});
