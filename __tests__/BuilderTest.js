const Builder = require('../src/Builder.js');
const { ERROR_MSG } = require('../src/constants/message.js');
const { BRIDGE_SIZE_MIN_RANGE, BRIDGE_SIZE_MAX_RANGE } = require('../src/constants/condition.js');

describe('Builder 클래스 테스트', () => {
  test('입력이 빈 값인 경우, 에러가 발생한다.', () => {
    const builder = new Builder();
    const input = '';

    expect(() => {
      builder.buildBridge(input);
    }).toThrow(ERROR_MSG.emptyInput);
  });

  test.each([['   '], ['  1'], ['asd'], ['일'], ['!']])(
    '입력에 숫자가 아닌 값이 있을 경우, 에러가 발생한다.',
    (input) => {
      const builder = new Builder();

      expect(() => {
        builder.buildBridge(input);
      }).toThrow(ERROR_MSG.invalidInputType);
    }
  );

  test.each([['012'], ['0012']])('입력이 0으로 시작할 경우, 에러가 발생한다.', (input) => {
    const builder = new Builder();

    expect(() => {
      builder.buildBridge(input);
    }).toThrow(ERROR_MSG.isStartedZero);
  });

  test.each([['1'], ['100']])(
    `입력이 ${BRIDGE_SIZE_MIN_RANGE} ~ ${BRIDGE_SIZE_MAX_RANGE} 사이 숫자가 아닐 경우, 에러가 발생한다.`,
    (input) => {
      const builder = new Builder();

      expect(() => {
        builder.buildBridge(input);
      }).toThrow(ERROR_MSG.invalidInputRange);
    }
  );

  test.each([['10'], ['14']])(`입력이 유효한 경우 에러가 발생하지 않는다.`, (input) => {
    const builder = new Builder();

    expect(() => {
      builder.buildBridge(input);
    }).not.toThrow();
  });
});
