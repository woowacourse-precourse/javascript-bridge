const InputView = require('../src/Views/InputView');

describe('예외처리 테스트', () => {
  test.each(['1a', '8e8', 'a'])(
    '다리 사이즈 숫자가 아닌 입력값 테스트',
    (input) => {
      expect(() => {
        InputView.validateBridgeSize(input);
      }).toThrow('[ERROR]');
    }
  );

  test('다리 사이즈 숫자 범위 예외 테스트', () => {
    const size = '2';
    expect(() => {
      InputView.validateBridgeSize(size);
    }).toThrow('[ERROR]');
  });

  test.each(['u', 'ud', 'D2'])('이동할 칸 예외처리 테스트', (input) => {
    expect(() => {
      InputView.validateMove(input);
    }).toThrow('[ERROR]');
  });

  test.each(['r', 'qr', 'Q2'])('재시작 여부 예외처리 테스트', (input) => {
    expect(() => {
      InputView.validateMove(input);
    }).toThrow('[ERROR]');
  });
});
