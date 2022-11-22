const InputErrorCheck = require('../src/InputErrorCheck');

describe('예외처리 테스트', () => {
  test('다리생성 예외 테스트', () => {
    const exceptionInputs = ['1', '2', '21', 's', 'ㅇ'];
    exceptionInputs.map((input) => {
      expect(() => {
        InputErrorCheck.bridgeSize(input);
      }).toThrow('[ERROR]');
    });
  });
});
