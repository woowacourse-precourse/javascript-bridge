const Validate = require('../src/utils/Validate');

describe('입력에 대한 유효성 테스트', () => {
  test('다리 크기 입력 테스트', () => {
    const bridgeSizes = ['2', '21', 'a', '1e', '-1', '3.5'];
    bridgeSizes.forEach((bridgeSize) => {
      expect(() => Validate.size(bridgeSize)).toThrow('[ERROR]');
    });
  });
  test('사용자 움직임 입력 테스트', () => {
    const moveInputs = ['F', 'u', 'd', '3', ' ', ''];
    moveInputs.forEach((moveInput) => {
      expect(() => Validate.move(moveInput)).toThrow('[ERROR]');
    });
  });
  test('재시작 여부 입력 테스트', () => {
    const moveInputs = ['r', 'q', '2', '3.4', ' ', ''];
    moveInputs.forEach((moveInput) => {
      expect(() => Validate.move(moveInput)).toThrow('[ERROR]');
    });
  });
});
