const { validateBridgeSize } = require('../src/InputView');

describe('입력 테스트', () => {
  test.each([['ad3'], ['10a'], ['2'], ['21'], ['-1']])('다리 길이 입력에 대한 예외 처리', (input) => {
      expect(() => {
        validateBridgeSize(input);
      }).toThrow();
    }
  );
  
  test.each([['R'], ['Q'], ['d'],['u']])('이동 할 칸 입력에 대한 예외 처리', (input) => {
    expect(() => {
      validateMove(input);
    }).toThrow();
  });
  
  test.each([['D'], ['U'], ['r'],['q']])('게임 재시작 입력에 대한 예외 처리', (input) => {
    expect(() => {
      validateRetry(input);
    }).toThrow();
  });
});
