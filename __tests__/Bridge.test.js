const Bridge = require('../src/model/Bridge');
const { ERROR } = require('../src/utils/constants');

describe('유효하지 않은 다리의 길이 입력 시 예외가 발생되는지 테스트한다.', () => {
  test.each([['a'], ['abc'], ['test123'], ['123testing'], , ['0,0']])(
    '문자가 포함된 입력이라면 예외가 발생한다.',
    size => {
      expect(() => {
        const bridge = new Bridge(size);
      }).toThrow(ERROR.bridge_size_error);
    }
  );

  test.each([[''], [' '], ['  '], [' 123 '], [' 123'], ['123 '], ['123 456']])(
    '공백이 포함된 입력이라면 예외가 발생한다.',
    size => {
      expect(() => {
        const bridge = new Bridge(size);
      }).toThrow(ERROR.bridge_size_error);
    }
  );

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

  test.each([['3.0'], ['4.0'], ['10.0'], ['18.0'], ['20.0']])('소수 입력이라면 예외가 발생한다.', size => {
    expect(() => {
      const bridge = new Bridge(size);
    }).toThrow(ERROR.bridge_size_error);
  });

  test.each([['03'], ['04'], ['05'], ['06'], ['07']])('한 자리 숫자 앞에 0이 있다면 예외가 발생한다.', size => {
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
