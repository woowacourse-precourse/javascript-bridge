const CurrBridge = require('../src/CurrBridge.js');

describe('CurrBridge 클래스 테스트', () => {
  test('예외 테스트 : 입력값이 문자가 아닌 경우 예외 처리한다', () => {
    expect(() => new CurrBridge('17')).toThrow(
      '[ERROR] 숫자를 제외한 문자를 입력해주세요.'
    );
  });

  test('예외 테스트 : 입력값이 U 또는 D가 아닌 경우 예외 처리한다', () => {
    expect(() => new CurrBridge('R')).toThrow(
      '[ERROR] U (위칸) 와 D (아래칸) 중에서만 입력해주세요.'
    );
  });

  test('예외 테스트 : 입력값이 대문자가 아닌 소문자(u 또는 d)인 경우 예외 처리한다', () => {
    expect(() => new CurrBridge('u')).toThrow(
      '[ERROR] 소문자가 아닌 대문자를 입력해주세요.'
    );
  });
});
