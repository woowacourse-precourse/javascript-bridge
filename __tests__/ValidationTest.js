const {
  isCollectBridgeLength,
  isValidateMoveInput,
  isValidateRetryInput,
} = require('../src/utils/bridgeGameValidator.js');

describe('입력 유효성 검사 테스트', () => {
  test.each([['1'], ['-11'], ['어머'], [''], ['/n'], ['100000000000']])(
    '3이상 20이하가 아닌 수를 입력했을 때',
    (input) => {
      expect(() => {
        isCollectBridgeLength(input);
      }).toThrow('[ERROR]');
    },
  );

  test.each([['1'], ['-11'], ['어머'], [''], ['/n'], ['UU'], ['DD']])('U 과 D가 아닌 값을 입력했을 때', (input) => {
    expect(() => {
      isValidateRetryInput(input);
    }).toThrow('[ERROR]');
  });

  test.each([['R'], ['Q']])('U 과 D가 아닌 값을 입력했을 때', (input) => {
    expect(() => {
      isValidateRetryInput(input);
    }).not.toThrow('[ERROR]');
  });

  test.each([['1'], ['-11'], ['어머'], [''], ['/n'], ['RR'], ['QQ']])('R 과 Q가 아닌 값을 입력했을 때', (input) => {
    expect(() => {
      isValidateMoveInput(input);
    }).toThrow('[ERROR]');
  });

  test.each([['U'], ['D']])('R 과 Q인 값을 입력했을 때', (input) => {
    expect(() => {
      isValidateMoveInput(input);
    }).not.toThrow('[ERROR]');
  });
});
