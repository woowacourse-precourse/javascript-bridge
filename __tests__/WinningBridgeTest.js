const WinningBridge = require('../src/WinningBridge.js');

const validateSize = (input) => {
  const winningBridge = new WinningBridge();
  return winningBridge.validate(input);
};

describe('WinningBridge 클래스 테스트', () => {
  test('예외 테스트 : 입력값이 숫자가 아닌 경우 예외 처리한다', () => {
    expect(() => validateSize(NaN)).toThrow(
      '[ERROR] 문자와 특수기호를 제외한 숫자를 입력해주세요.'
    );
  });
  test('예외 테스트 : 입력값이 3 이상 20 이하의 값이 아닌 경우 예외 처리한다', () => {
    expect(() => validateSize(2)).toThrow(
      '[ERROR] 다리의 길이는 3 이상 20 이하만 가능합니다.'
    );
  });
  test('예외 테스트 : 입력값이 빈칸인 경우 예외 처리한다', () => {
    expect(() => validateSize('')).toThrow(
      '[ERROR] 공백을 입력할 수 없습니다. 값을 입력해주세요.'
    );
  });
});
