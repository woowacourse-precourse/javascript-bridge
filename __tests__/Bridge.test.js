const Bridge = require('../src/model/Bridge');
const { ERROR } = require('../src/utils/constants');

describe('다리 길이 범위에 어긋나는 값 입력 시 예외가 발생되는지 테스트한다.', () => {
  test.each([['-10'], ['-8'], ['-5'], ['-3'], ['-1'], ['0'], ['1'], ['2']])(
    '3 미만의 입력이라면 예외가 발생한다.',
    size => {
      expect(() => {
        const bridge = new Bridge(size);
      }).toThrow(ERROR.bridge_size_error);
    }
  );

  test.each([['21'], ['22'], ['30'], ['35'], ['40']])('20 초과의 입력이라면 예외가 발생한다.', size => {
    expect(() => {
      const bridge = new Bridge(size);
    }).toThrow(ERROR.bridge_size_error);
  });
});

describe('유효한 다리의 길이 입력 시 예외가 발생되지 않는지 테스트한다.', () => {
  test.each([['3'], ['4'], ['10'], ['19'], ['20']])('3 이상 20 이하의 입력이라면 예외가 발생하지 않는다.', size => {
    expect(() => {
      const bridge = new Bridge(size);
    }).not.toThrow(ERROR.bridge_size_error);
  });
});
