const Validator = require('../src/Validator');

describe('예외 검증 테스트', () => {
  const validator = new Validator();
  test('사용자가 bridgeSized에 잘못 입력시 에러를 발생합니다.', () => {
    const inputBridgeSizeList = ['2', '21', 'a', 'D', 'q'];
    inputBridgeSizeList.forEach((inputBridgeSize) => {
      expect(() => {
        validator.checkBridgeSize(inputBridgeSize);
      }).toThrow('[ERROR]');
    });
  });

  test('사용자가 moving 잘못 입력시 에러를 발생합니다.', () => {
    const inputMovingList = ['u', 'd', 'UD', 'U1', '4', '1'];
    inputMovingList.forEach((inputMoving) => {
      expect(() => {
        validator.checkMoving(inputMoving);
      }).toThrow('[ERROR]');
    });
  });

  test('사용자가 gameCommand 잘못 입력시 에러를 발생합니다.', () => {
    const inputGameCommandList = ['r', 'q', '3', 'RQ'];
    inputGameCommandList.forEach((inputGameCommand) => {
      expect(() => {
        validator.checkGameCommand(inputGameCommand);
      }).toThrow('[ERROR]');
    });
  });
});
