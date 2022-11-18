const WinningBridge = require('../src/WinningBridge.js');

describe('WinningBridge 클래스 테스트', () => {
  test('예외 테스트 : 입력값이 숫자가 아닌 경우 예외 처리한다', () => {
    expect(() => new WinningBridge(NaN)).toThrow(
      '[ERROR] 문자와 기호를 제외한 숫자를 입력해주세요.'
    );
  });
  test('예외 테스트 : 입력값이 3 이상 20 이하의 값이 아닌 경우 예외 처리한다', () => {
    expect(() => new WinningBridge(2)).toThrow(
      '[ERROR] 다리의 길이는 3 이상 20 이하만 가능합니다.'
    );
  });
});
