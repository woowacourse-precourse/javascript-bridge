const WinningBridge = require('../src/model/WinningBridge');

const validateSize = (input) => {
  return WinningBridge.validate(input);
};

describe('WinningBridge 클래스 테스트', () => {
  test.each([
    ['', '[ERROR] 공백을 입력할 수 없습니다. 값을 입력해주세요.'],
    [NaN, '[ERROR] 문자와 특수기호를 제외한 숫자를 입력해주세요.'],
    [21, '[ERROR] 다리의 길이는 3 이상 20 이하만 가능합니다.'],
    [2, '[ERROR] 다리의 길이는 3 이상 20 이하만 가능합니다.'],
    [-11, '[ERROR] 다리의 길이는 3 이상 20 이하만 가능합니다.'],
    [99, '[ERROR] 다리의 길이는 3 이상 20 이하만 가능합니다.'],
  ])(
    '예외 테스트 : 입력값이 숫자가 아닌 경우 예외 처리한다',
    (input, expected) => {
      expect(() => validateSize(input)).toThrow(expected);
    }
  );
});
